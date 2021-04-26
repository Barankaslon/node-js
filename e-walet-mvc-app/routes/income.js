const {Router} = require('express');
const Income = require('../models/income')

const router = Router()

router.get('/', async (req, res) => {
    const incomes = await Income.getAll()
    res.render('income', {
        title: 'Your income',
        isIncome: true,
        incomes
    })
})


module.exports = router