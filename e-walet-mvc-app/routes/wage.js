const {Router} = require('express');
const Income = require('../models/income')
const router = Router();

router.post('/add', async (req, res) => {
    const income = await Income.findbyId(req.body.id)
    await req.user.addToWage(income)
    res.redirect('/total')
})

/* router.get('/', async (req, res) => {
    const wage = await Wage.fetch()
    res.render('wage', {
        wage
    })
}) */

module.exports = router