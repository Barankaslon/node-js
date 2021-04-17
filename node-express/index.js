const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const homeRoutes = require('./routes/home')
const addRoutes = require('./routes/add')
const cardRoutes = require('./routes/card')
const coursesRoutes = require('./routes/courses')
const Handlebars = require('handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')

const app = express()

const hbs = exphbs.create({
    handlebars: allowInsecurePrototypeAccess(Handlebars),
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: true}))
app.use('/', homeRoutes)
app.use('/add', addRoutes)
app.use('/card', cardRoutes)
app.use('/courses', coursesRoutes)

const PORT = process.env.PORT || 3000


async function start() {
    try {
        const url = `mongodb+srv://admin:4I4ZvtUP8CSWvaSX@cluster0.j7czu.mongodb.net/shop`
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useFindAndModify: false
        })
        app.listen(PORT, () => {
            console.log(`server is running on port ${PORT}`)
        })
    } catch (e) {
        console.log(e)
    }

}

start()

