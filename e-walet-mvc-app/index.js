const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars')
const homeRoutes = require('./routes/home')
const investRoutes = require('./routes/invest')
const savingRoutes = require('./routes/saving')
const incomeRoutes = require('./routes/income')
const addRoutes = require('./routes/add')

const app = express();

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'pages')

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use('/', homeRoutes)
app.use('/invest', investRoutes)
app.use('/saving', savingRoutes)
app.use('/income', incomeRoutes)
app.use('/add', addRoutes)

const PORT = process.env.PORT || 3000


async function start() {
    try {
        const url = `mongodb+srv://admin:4I4ZvtUP8CSWvaSX@cluster0.j7czu.mongodb.net/income`
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })
    } catch (e) {
        console.log(e)
    }
}

start()
