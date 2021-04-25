const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars')

const app = express();

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'pages')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Main page'
    })
})

app.get('/invest', (req, res) => {
    res.render('invest', {
        title: 'Your Investments'
    })
})

app.get('/income', (req, res) => {
    res.render('income', {
        title: 'Your income'
    })
})

app.get('/saving', (req, res) => {
    res.render('saving', {
        title: 'Your savings'
    })
})

app.get('/add', (req, res) => {
    res.render('add')
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})