const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const connectDB = require('./config/db')
const authRoutes = require('./routes/auth')
const userRoutes = require('./routes/user')

const app = express()

//connecting the DB
connectDB()

app.use(bodyParser.json())
app.use(cookieParser())

//Middlewares
app.use('/api/v1/auth',authRoutes)
app.use('/api/v1/user',userRoutes)

//port
const port = process.env.PORT || 7500

app.listen(port,()=>{
    console.log(`server is listening at port ${port}`)
})