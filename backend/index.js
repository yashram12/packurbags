import express, { json } from 'express';
import conn from './db.js'
import bcrypt, { hash } from 'bcrypt'
import jwt from 'jsonwebtoken'

const app = express();

app.use(express.json());


const auth = (req,res,next)=>{
    const token = req.header('authorization');
    
    if(!token) return res.status(401).json({
        message:'no token'
    })
    try{
        const decoded = jwt.verify(token,'secret');
        req.user = decoded.id;
        next()
    }
    catch(e){
        console.log('invalid token');
        return res.status(400).json({message:'session expired  :('})
    }
}

app.get("/",auth, async (req, res) => {
    res.send(`This is home route for the user ${req.user}`);
});

app.post("/api/v1/register", async (req, res) => {
  
    //getting data from client
    const { fname, lname, gender, phone, username, password } = req.body;

    //queries used in this route
    const select_phone_username = `SELECT PHONE,USERNAME FROM USER U,AUTH A WHERE A.USER_ID=U.USER_ID;`;
    const select_uid = `SELECT USER_ID FROM USER WHERE PHONE=${phone};`;
    const insert_user = `INSERT INTO USER (FNAME,LNAME,GENDER,PHONE) VALUES('${fname}','${lname}','${gender}',${phone})`;
    const insert_auth = (result,pass) => {return (`INSERT INTO AUTH VALUES(${result[0].USER_ID},'${username}','${pass}');`);}

    //quering db for phone and username
    conn.query(select_phone_username,(err, result) => {
        if (err) console.log(err);
        else {
            const phonelist = result.map(el =>el.PHONE);
            const usernamelist = result.map(el => el.USERNAME);
            
            //checking for existing or new user using phone and username
            if(phonelist.indexOf(phone) == -1 && usernamelist.indexOf(username) == -1){

                //quering db to insert user data into user table
                conn.query(insert_user,(err) => {
                    if (err)
                        res.status(400).json({
                            message: "Invalid phone number"
                        })
                    else{

                        //quering db for userid
                        conn.query(select_uid,async (err, result) => {
                                if (err) console.log(err);
                                else{
                                    
                                    //hashing the password
                                    const pass = await bcrypt.hash(password,10);

                                    //quering db to insert the login credentials into auth table
                                    conn.query(insert_auth(result,pass));
                                }
                        });
                        
                        res.status(200).json({
                            message: "User Registered Successfully :) ",
                        });
                    }
                });
                
            
            }
            else{
                res.status(400).json({message:'user already exists...'})
            }
        }
    });


});

app.post('/api/v1/login',async (req,res) =>{

    //getting data from client
    const {username,password} = req.body;

    //queries used in this route
    const selectPass = `SELECT USER_ID,PASSWORD FROM AUTH WHERE USERNAME='${username}';`;

    //quering db for getting stored(hashed) password 
    conn.query(selectPass,async (err,result)=>{
        if(err) console.log(err);
        if(!result[0]){
            res.status(401).json({
                message:'User not registered'
            })
        }
        else{

            //validating the password
            const valid = await bcrypt.compare(password,result[0].PASSWORD);
            if(valid){
                const token = jwt.sign({id: result[0].USER_ID},'secret',{expiresIn:3600})
                res.status(200).json({status:'success',message:'User logged in successfully...:)',token});
            }
            else    
                res.status(401).json({message:'Incorrect Password'});
        }
    })
})


app.get('/api/v1/user',auth,async (req,res)=>{
    const uid = req.user;
    conn.query(`SELECT USERNAME,FNAME,LNAME,GENDER,PHONE FROM USER U, AUTH A WHERE U.USER_ID = A.USER_ID AND U.USER_ID=${uid};`,(err,result)=>{
        if(err)
            return res.status(501).json({message:'user not found'});
        else{
            res.status(200).json({
                message:'success',
                data:result[0]
            })
        }
    })
})

app.put('/api/v1/user',auth,async (req,res)=>{
    const uid = req.user;
    if(!uid){
        res.status(401).json({message:'no user to update...'})
    }
    else{
        const changed = Object.entries(req.body);
        changed.map((el)=>{
            conn.query(`UPDATE USER SET ${el[0]}='${el[1]}' WHERE USER_ID=${uid};`,(err)=>{
                if(err)
                    return res.status(501).json({message:'user not found...'})
            });
        })
        res.status(200).json({message:'user updated successfully  :)'})
    }
})

app.post('/api/v1/review',auth,async (req,res)=>{
    //rid,rtitle,rdesc,rating,placeid,userid
    const {rtitle , rdesc , rating ,pid}=req.body;
    const uid= req.user;
    if(!rtitle || !rdesc || !rating) return res.status(400).json({message:"data required"})
    else{
        conn.query(`SELECT MAX(CAST(SUBSTR(RID,2) AS UNSIGNED)) AS RID FROM REVIEW ;`,(err,result)=>{
            const rid = "R"+(result[0]['RID']+1).toString();
            conn.query(`INSERT INTO REVIEW VALUES('${rid}','${rtitle}','${rdesc}',${rating},'${pid}',${uid});`,(err)=>{
                if(err){
                    console.log(err);
                    return res.status(400).json({message:'rating must be in the range of 0-5'});
                }
                else{
                    res.status(200).json({message:"review updated successfully..."})
                }
            })
        })
    }
})

app.get('/api/v1/review',auth,async (req,res)=>{
    conn.query(`SELECT * FROM REVIEW WHERE USER_ID=${req.user}`,(err,result)=>{
        if(err) return res.status(501).json({message:'user does not have any reviews'});
        else{
            res.status(200).json({
                message:"success",
                data:result
            })
        }
    })
 
})


//route for getting all the trips
app.get('/api/v1/places',async (req,res)=>{
    conn.query(`SELECT * FROM PLACE`,(err,result)=>{
        if(err) console.log(err)
        else{
            res.status(200).json({
                message:'success',
                data:result
            })
        }
    })
})

app.get('/api/v1/tours',async (req,res)=>{
    conn.query(`SELECT * FROM TRIP`,(err,result)=>{
        if(err) console.log(err)
        else{
            res.status(200).json({
                message:'success',
                data:result
            })
        }
    })
})

//route for getting a single trip

//route for getting all places

//route for getting a single place

//route for getting all the reviews of the place

//route for getting all the reviews of a person

//route for getting all the photos of a place

//route for getting all the photos of a trip


export default app;