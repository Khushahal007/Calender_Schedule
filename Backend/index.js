const express=require('express')
const dotenv=require('dotenv')
dotenv.config()
const db=require('./db')
const calendarModel=require('./Model/calenderModel')
const {calenderController}=require('./Routes/calenderRoute')
const bodyParser = require("body-parser");

// const cors=require("cors")

const app = express()

// app.use(express.json());
app.use(bodyParser.json());
// app.use(cors())
app.get('/', (req, res) => {
   res.send("Server is running Succcessfuly")
})

app.use("/api", calenderController)

const port=process.env.PORT || 8000

app.listen(port,()=>{
    console.log("Server is listen on port " + port)
})