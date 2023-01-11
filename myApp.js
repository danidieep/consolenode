let express = require('express');
let app = express();
require('dotenv').config()
let bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({extended:false}))

app.use("/public", express.static(__dirname + "/public"));

app.get('/now', (req, res, next) =>{

  req.time = new Date().toString()
  next()  
},(req, res)=>{
  let obj = {}
  obj.time = req.time
  res.json(obj)
})



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

app.get('/:word/echo', (req, res, next)=>{
  let {word} = req.params
  let obj = {}
  obj.echo = word
  res.json(obj)
})

app.get('/name', (req, res, next) =>{
  let {first, last} = req.query
  let obj = {}
  obj.name = `${first} ${last}`
  res.json(obj)
})


app.post('/name', (req, res, next) =>{
  let {first, last} = req.body
  let obj={}
  obj.name = `${first} ${last}`
  res.json(obj)
})






























 module.exports = app;
