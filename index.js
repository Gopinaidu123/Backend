// import http from 'http';
// import { json } from 'stream/consumers';
// const server =http.createServer((req,res) => {
//     console.log(req.method);
//     if(req.url=="/user") {
//         res.writeHead(200,{"content-Type" : "application/json"});
//         res.end(JSON.stringify({name:"thub"}))
//     } else{
//         res.writeHead(200,{"content-Type" : "text/plain"});
//         res.end("Hello this is from Backend aha")
//     }

// });
// server.listen(7007 , () =>{
//     console.log(`server running at port ${7007}`)
// });

import express from 'express';
const app = express();

app.use(express.json());

// app.use((req, res, next) => {
//     console.log(`${req.method} ${req.url}`);
//     next();  
// });
 
app.use(express.json());

app.get("/users", (req, res) => {
    res.send("Hello dude");
});

 app.post("/data", (req, res) => {
    console.log(req.body);
    res.send("Data is received");
});

app.put("/update", ( req,res) =>{
    res.send("Data is updated");    
});
 

app.listen(7007, () => {
    console.log("Express server running at port 7007");
});
