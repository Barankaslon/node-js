const {Router} = require('express');

const router = Router()

router.get('/', (req, res) => {
    res.render('total', {
        title: 'Your Wallet',
        isTotal: true
    })
})


module.exports = router