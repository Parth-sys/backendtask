import { MongoClient } from "mongodb";

 async function  con(){
    
    const url=process.env.url;
    const client=new MongoClient(url);
    await client.connect();
    console.log("mongo connected")
    return client;


}



async function creatuser(client,name,email,password){
 return await client.db("user1").collection("people").insertOne({name:name,email:email,password:password})
}



export{con,creatuser}