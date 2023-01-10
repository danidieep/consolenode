let express = require('express');
let app = express();
require('dotenv').config()

app.use("/public", express.static(__dirname + "/public"));

app.get("/", (_req, res) =>{
  // res.send("Hello Express")
  absolutePath = __dirname + '/views/index.html'
  res.sendFile(absolutePath)
})

app.get("/json", (req, res) =>{
  let obj = {"message": "Hello json"}
    if(process.env.MESSAGE_STYLE == 'uppercase'){
        obj.message = obj.message.toUpperCase()
        res.json(obj)
    }else{
        res.json(obj)

    }
})































 module.exports = app;
