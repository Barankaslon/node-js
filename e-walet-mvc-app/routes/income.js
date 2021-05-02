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

router.get('/:id/edit', async (req, res) => {
    if(!req.query.allow) {
        return res.redirect('/')
    }

    const wage = await Income.getById(req.params.id)

    res.render('wage-edit', {
        title: `Edit`,
        wage
    })
})

router.get('/:id', async (req, res) => {
    const wages = await Income.getById(req.params.id)
    res.render('wage', {
        title: `Your change`,
        wages
    })
})


module.exports = router