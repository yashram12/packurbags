import express from 'express';
import conn from './db.js'

const app = express();



app.use(express.json());

app.get("/", async (req, res) => {
  res.send("Home");
});

app.post("/api/v1/register", async (req, res) => {
  
    const { fname, lname, gender, phone, username, password } = req.body;
    // conn.connect((err) => {
    //     if (err) throw err;
    //     else console.log("connection created successfully");
    // });

    conn.query(`SELECT PHONE,USERNAME FROM USER U,AUTH A WHERE A.USER_ID=U.USER_ID;`,(err, result) => {
        if (err) console.log(err);
        else {
            const phonelist = result.map(el =>el.PHONE);
            if(phonelist.indexOf(phone) == -1){
                conn.query(`INSERT INTO USER (FNAME,LNAME,GENDER,PHONE) VALUES('${fname}','${lname}','${gender}',${phone})`,
                (err) => console.log(err)
                );
            
            
                conn.query(`SELECT USER_ID FROM USER WHERE PHONE=${phone}`,(err, result) => {
                        if (err) console.log(err);
                        // console.log(result[0].USER_ID);
                        conn.query(
                        `INSERT INTO AUTH VALUES(${result[0].USER_ID},'${username}','${password}');`
                        );
                        // conn.end();
                    }
                );
            
                res.status(200).json({
                message: "success",
                });
            }
            else{
                // conn.end();
                res.status(400).json({message:'user already exists...'})
            }
        }
    });


});

export default app;