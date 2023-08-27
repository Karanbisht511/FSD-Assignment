const express=require("express")
const connectMongo=require('./dbConfig')
const user=require('./Route/user')

const app=express()

const port=8000

app.use(express.json())

connectMongo()

app.use("/users",user)

app.get("/",(req,res)=>{
    res.send("Home page working")
})

app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})
