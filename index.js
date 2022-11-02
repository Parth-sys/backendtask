import express  from 'express'
import dotenv from 'dotenv'
import nodemailer from 'nodemailer'
import cors from 'cors'
import {creatuser,con} from './connection.js'
import  jwt  from 'jsonwebtoken'
import { auth} from './middleware/auth.js'

const app=express();
 dotenv.config();
const Port=3000

app.use(express.json({extended:false}))
app.use(express.json());
app.use(cors());





app.post('/signup',async(req,res)=>{
    const {  name,email,password}=req.body;
      const client=await con();
    const result=await  creatuser(client,name,email,password);
     
    res.send(result)
    
})

app.post('/login',async(req,res)=>{
    const {email,password}=req.body;
    
     
     try {
         const client=await con();


         const result =client.db("user1").collection("people").findOne({email:email,password:password}) 
         const token=jwt.sign({id:result._id},process.env.AUTH_KEY)

           if(!result){
            res.status(400).send("Invalid Credentials")
           }


         if(result){
           res.status(200).send({message:"login success",token:token})
         }
      
         
     } catch (error) {
        console.log(error)
     }


})


  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    secure:true,
    port: 465,
    auth: {
        user: process.env.EMAIL,
        pass:process.env.PASSWORD
      },
    //debug: true, // show debug output
    //logger: true // log information in console
  });



  transporter.verify(function(error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });






app.post("/forgetpassword",async(req,res)=>{
    const {email}=req.body;

   const client=await con();
   const result= await client.db("user1").collection("people").findOne({email:email});
     console.log(result)

   if(!result){
    return  response.status(403).json({
        message: "Wrong email"
    })
}

if(result){
    var ran = Math.random().toString(36).substring(2,7);
    
   

   var mailOptions={
    from:'ticketbook401@gmail.com',
    to:email,
    subject:'sending email for authentication of user',
    text:"hi ur verification link is here , ur verificaion code:"+ ran,
    html: '<p>Click <a href="https://zealous-lumiere-ff13e7.netlify.app/forgetpass">here</a> to reset your password .ur passcode is  </p>'+ran

   }  
    

    transporter.sendMail(mailOptions,function(error,info){
        if(error){
            console.log(error);
        }else{
            console.log("email sent" + info.response);
        }
    })
    
    res.send("success,check ur email");
}else{
    response.send("error")
}
}
)


app.post('/mailsend', auth ,async (req, res, next) => {
 
    var  email = req.body.email
    
  
    var mail = {
      from: 'ticketbook401@gmail.com',
      to: email,// receiver email,
      subject:'sending email for authentication of user',
    text:"hi ur verification link is here , ur verificaion code:",
    html: '<p>Click <a href="https://zealous-lumiere-ff13e7.netlify.app/forgetpass">here</a> to reset your password .ur passcode is  </p>'
    }
  
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        res.json({
          status: 'fail'
        })
      } else {
        res.json({
         status: 'success'
        })
      }
    })
  })



app.get('/',(req,res)=>{
    res.send("server is running")
})


app.listen(Port,(req,res)=>{
  console.log("server is running",Port)
  
})