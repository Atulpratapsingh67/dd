const express = require('express');
const app = express();
let path =require('path');

app.use(express.static(path.join(__dirname + '/dist/angular')));
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname + '/dist/angular/index.html'))
})
app.listen(process.env.PORT || 8080);