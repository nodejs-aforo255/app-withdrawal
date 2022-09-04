require('dotenv').config()
const express = require('express')
const app = express()
const config = require("./src/app/config/environments")

const PORT = config.PORT || 3004

app.use(express.json())
app.use('/api', require('./src/app/routes'))

app.listen(PORT, () => {
    console.log('Application running on port ', PORT)
})