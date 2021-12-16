import express, { json } from 'express';
import conn from './db.js'
import bcrypt, { hash } from 'bcrypt'

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  res.send("Home");
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
                            message: "User Registerd Successfully :) ",
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
    const selectPass = `SELECT PASSWORD FROM AUTH WHERE USERNAME='${username}';`;

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
            if(valid)
                res.status(200).json({message:'User logged in successfully...:)'});
            else    
                res.status(401).json({message:'Incorrect Password'});
        }
    })
})

export default app;