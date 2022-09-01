const express = require("express")
const profileRouter = require("./Router/profileRouter")
//const profileRouter = express.Router()
const port = process.env.PORT || 4000
//const profileModel = require("profileModel")

const app = express();
app.use(express.json())
app.use('/',profileRouter)


app.listen(port, ()=>{
    console.log(`Server is running on PORT ${port}`)
})