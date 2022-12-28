/*
@masfajaranugrah

*/
require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT

// middleware 
const logReq = require('./middleware/logs')
app.use(logReq)
app.use(express.json())

// router 
const productRoutes = require('./routes/product')
app.use('/product', productRoutes)



app.listen(PORT, () => {
    console.log(`server running with link http://localhost:${PORT}`)
})
