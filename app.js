import express from 'express'
const app = express()
const port = 3000
app.use(express.static("public"))
app.get("/", (req,res)=>{
    res.send("<h2 style = 'color:red;'>work is done</h2>")
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})