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
app.get("/users", (req, res) => {
    res.send("Hello from Express server");
})
app.get("/get-user", (req, res) => {
    req.send("User data from Express server");
})
app.listen(7007, () => {
    console.log("Express server running at port 7007");
});