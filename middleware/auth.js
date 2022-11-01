import jwt from 'jsonwebtoken';
//custom middleware 

export const auth=(request,response,next)=>{
    try{
const token=request.header('x-auth-key');
console.log(token);
jwt.verify(token,process.env.AUTH_KEY)
next();
    }
    catch(err){
      response.status(401);
      response.send({error:err.message})
    }
}


