const express = require("express")
const profileRouter = require("./Router/profileRouter")

const port = process.env.PORT || 4000


const app = express();
app.use(express.json())
app.use('/',profileRouter)


app.listen(port, ()=>{
    console.log(`Server is running on PORT ${port}`)
})