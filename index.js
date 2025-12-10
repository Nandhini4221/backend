let express = require("express")
let port = 2001;
let app = express()

app.use("/login",async(req,res)=>{
    res.write(`<h1>hello login page</h1>`)
})
app.use("/main",async(req,res)=>{
    res.write(`<a href="/login">login</a>`)
})

// app.use("/",async(req,res)=>{
//     res.sendFile(__dirname+"/index.html")
// })

app.listen(port,()=> console.log("server running",port))