const {Router} = require('express');
const Income = require('../models/income')
const router = Router()

router.get('/', (req, res) => {
    res.render('add', {
        title: 'add',
        isHome: true
    })
})

router.post('/', async (req, res) => {
    const income = new Income(req.body.employer, req.body.position, req.body.wage)

    await income.save()

    res.redirect('/income')
})


module.exports = router