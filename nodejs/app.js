const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({extended: false}))

app.set('view engine', 'ejs')
app.set('views', 'views')

const userData = require('./routes/admin')
const userRoutes = require('./routes/user')

app.use('/admin', userData.routes)
app.use(userRoutes)


const users = []

app.listen(3000)