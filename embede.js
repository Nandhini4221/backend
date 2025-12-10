let express = require("express")
let port = 2002;
let app = express()
let body = require("body-parser")
app.use(body.urlencoded({extended:true}))
app.use("/main",async(req,res)=>{
    res.write(`<h1>hello world</h1>`)
})

let user ="nandhini"
let title = "Ejs"
let ar =["afril","nandhini","abijey","sandy","rock"]
let obj={
    name:"afril",
    class:"mern",
    age:22
}

let person = []

app.get("/h1",async(req,res)=>{
    res.render("index.ejs",{
        user,title,ar,obj,person
    })
})

app.post("/",async(req,res)=>{
    person.push(req.body.named)
    res.redirect("/h1")
})

app.listen(port,()=>{
    console.log("server running",port)
})