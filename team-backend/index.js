const express=require("express")
const connectMongo=require('./dbConfig')
const user=require('./Route/user')
const cors=require('cors')
// const httpProxy=require('http-proxy')

// const proxy=httpProxy.createProxyServer()

const app=express()
app.use(cors({
  origin: ['http://localhost:3000']
}));
const port=8000||process.env.PORT

app.use(express.json())

// app.use('/api', (req, res) => {
//     proxy.web(req, res, { target: `http://localhost:${port}` });
//   });

connectMongo()

app.use("/users",user)

app.get("/",(req,res)=>{
    res.send("Home page working")
})

app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})
