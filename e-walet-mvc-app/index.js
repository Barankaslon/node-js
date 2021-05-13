const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars')
const session = require('express-session');
const MongoStore = require('connect-mongodb-session') (session)
const homeRoutes = require('./routes/home')
const investRoutes = require('./routes/invest')
const savingRoutes = require('./routes/saving')
const incomeRoutes = require('./routes/income')
const totalRoutes = require('./routes/total')
const addRoutes = require('./routes/add')
const authRoutes = require('./routes/auth')
const User = require('./models/user')
const varMiddleware = require('./middleware/variables')

const MONGODB_URI = `mongodb+srv://admin:4I4ZvtUP8CSWvaSX@cluster0.j7czu.mongodb.net/income`
const app = express();

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})
const store = new MongoStore({
    collection: 'sessions',
    uri: MONGODB_URI
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'pages')

/* app.use(async (req, res, next) => {
    try {
        const user = await User.findById('60931b6fa10dca1e7cad0ecb')
        req.user = user
        next()
    } catch(e) {
        console.log(e)
    }

}) */

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(session({
    secret: 'some secret value',
    resave: false,
    saveUninitialized: false,
    store
}))
app.use(varMiddleware)

app.use('/', homeRoutes)
app.use('/invest', investRoutes)
app.use('/saving', savingRoutes)
app.use('/income', incomeRoutes)
app.use('/total', totalRoutes)
app.use('/add', addRoutes)
app.use('/auth', authRoutes)

const PORT = process.env.PORT || 3000


async function start() {
    try {
        /* const url = `mongodb+srv://admin:4I4ZvtUP8CSWvaSX@cluster0.j7czu.mongodb.net/income` */
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        })
/*         const candidate = await User.findOne()
        if (!candidate) {
            const user = new User ({
                email: 'barankaslon@hotmail.com',
                name: 'Gvozd',
                sum: {total: []}
            })
            await user.save()
        } */
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })
    } catch (e) {
        console.log(e)
    }
}

start()
