const express = require("express");
const app = express();

app.use(express.static('public'));

app.get('/',(req,res)=>{    
    res.sendFile(__dirname + '/main_page.html');
    
    
});

app.get('/calculator',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
});



app.listen(3000,()=>{
    console.log("server running at port 3000");
})