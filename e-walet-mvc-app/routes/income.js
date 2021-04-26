const {Router} = require('express');

const router = Router()

router.get('/', (req, res) => {
    res.render('income', {
        title: 'Your income',
        isIncome: true
    })
})


module.exports = router