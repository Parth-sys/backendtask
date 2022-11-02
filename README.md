# backendtask Api Operations





# REST API  Application

The REST API to the example app is described below.


###   1 Request  signup


 Method:  `Post`

    http://localhost:3000/signup

 body  with  json values name,email,password




### Response

 {
    "acknowledged": true,
    "insertedId": "6361f3e7e86b0d86694d5cca"
}




###  2 Request login




 Method: 'Post'
 
 body with json  email and password
 
  http://localhost:3000/login
   
  In login request authkey is generated .




### Response

    
{
    "message": "login success",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NjczNjM5NTR9.EpmLu-J1xZCJCh-aKatBDKZhHR75V-cASBS7kBL6l_E"
}




###  3 Request forgetpassword

 Method: 'Post'





 http://localhost:3000/forgetpassword
 
 body with json  email address 
email is sent to the email address with login password.






### Response  
  
    success,check ur email








### Request 4 Mailsend

Method:  `POST`

http://localhost:3000/mailsend





   body with json value email
   add x-auth-key to the header which is generated at login to check user.
    add email address and it will get an email from server.






### Response

   {
   "status":"success"
   
   }






## Run the app

    https://backendtask22.herokuapp.com/


