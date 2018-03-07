const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 7000
const index = require('./routes/index')
const cors = require('cors')

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// routes
app.use('/', index)

app.listen(port, () => {
    console.log(`App is running on port ${port}`)
})
