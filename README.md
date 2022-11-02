# Node JS Task


 Develop a node js application for sending email from the server with 4 api endpoints with
proper documentation for work with those api’s.

# REST API  Application



###   1 Request  signup


 Method:  `Post`


add   json values name,email,password into body


![Screenshot (106)](https://user-images.githubusercontent.com/66139820/199551528-664db958-54b5-4949-9107-0725915db1e8.png)





### Response

 {
    "acknowledged": true,
    "insertedId": "6361f3e7e86b0d86694d5cca"
}






###  2 Request login




 Method: 'Post'
 
   add email and password into body.
   In login request authkey is generated .



![Screenshot (107)](https://user-images.githubusercontent.com/66139820/199552106-b0aba332-2b7a-4138-abad-7b35dd204000.png)






### Response

    
{
    "message": "login success",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NjczNjM5NTR9.EpmLu-J1xZCJCh-aKatBDKZhHR75V-cASBS7kBL6l_E"
}







###  3 Request forgetpassword

 Method: 'Post'


![Screenshot (102)](https://user-images.githubusercontent.com/66139820/199545878-ba625305-4b4b-4948-abf5-7b3b0794e0be.png)




 
we need to add email address of receiver. 
email is sent to the email address with login password.






### Response  
  

success,check ur email











### 4 Request  Mailsend

Method:  `POST`

add x-auth-key to the header which is generated at login to check user.



![Screenshot (105)](https://user-images.githubusercontent.com/66139820/199550730-84c28f04-fbc2-4fb2-99e4-1ca153297b0b.png)



   add email address and it will get an email from server.



![Screenshot (103)](https://user-images.githubusercontent.com/66139820/199550245-a4446258-65be-46fb-9788-d61c505379b2.png)





### Response

   {
   "status":"success"
   
   }






## Run the app

    https://backendtask22.herokuapp.com/


