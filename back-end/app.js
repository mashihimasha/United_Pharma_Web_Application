const express = require('express');
const app=express();

app.get('/',(req, res)=>{
    res.send("msg send1");
});

app.get('/blog',(req, res)=>{
    res.send("msg send2");
});
module.exports=app