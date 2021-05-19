const {Router} = require('express');
const Income = require('../models/income')
const auth = require('../middleware/auth')

const router = Router()

router.post('/add', async (req, res) => {
    const income = await Income.findbyId(req.body.id)
    await req.user.addToTotalIncome(income)
    res.redirect('/total')
})

router.get('/', async (req, res) => {
    const user = await req.user
/*     .populate('sum.total.incomeId')
    .execPopulate() */

     res.render('total', {
       title: 'Total'
     })
  })

module.exports = router