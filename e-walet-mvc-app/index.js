const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars')
const homeRoutes = require('./routes/home')
const investRoutes = require('./routes/invest')
const savingRoutes = require('./routes/saving')
const incomeRoutes = require('./routes/income')

const app = express();

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'pages')

app.use(express.static('public'))
app.use('/', homeRoutes)
app.use('/invest', investRoutes)
app.use('/saving', savingRoutes)
app.use('/income', incomeRoutes)

app.get('/add', (req, res) => {
    res.render('add')
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})