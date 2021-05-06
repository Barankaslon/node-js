const {Router} = require('express');
const Income = require('../models/income')

const router = Router()

router.get('/', async (req, res) => {
    const incomes = await Income.find().populate('userId')

    console.log(incomes)

    const fixedIncomes = incomes.map(i => i.toObject());
    res.render('income', {
        title: 'Your income',
        isIncome: true,
        incomes: fixedIncomes
    })
})

router.get('/:id/edit', async (req, res) => {
    if(!req.query.allow) {
        return res.redirect('/')
    }

    const wage = await Income.findById(req.params.id)

    res.render('wage-edit', {
        title: `Edit`,
        wage: wage.toObject()
    })
})

router.post('/edit', async (req, res) => {
    const {id} = req.body
    delete req.body.id
    await Income.findByIdAndUpdate(id, req.body)
    res.redirect('/income')
})

router.post('/remove', async (req, res) => {
    try {
        await Income.deleteOne({_id: req.body.id})
        res.redirect('/income')
    } catch(e) {
        console.log(e)
    }
})

router.get('/:id', async (req, res) => {
    const wages = await Income.findById(req.params.id)
    res.render('wage', {
        title: `Your change`,
        wages: wages.toObject()
    })
})


module.exports = router