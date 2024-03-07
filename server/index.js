const express = require('express');
const cors = require('cors')

const app = express(cors());


app.get('/',(req,res)=>{
    res.send('server home')
})

app.get('/home',(req,res)=>{
    res.send({ message: "Post request received" });
   
})



 
app.get('/corse',(req,res)=>{
    res.send("Access-Control-Allow-Origin")
})

app.get('/telegram',(req,res)=>{
    res.send([{'name':'telegram'}])
})





app.listen(8080,()=>console.log("Сервер запущен.Порт 8080, адресс http://localhost:8080"))