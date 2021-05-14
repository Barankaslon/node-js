const {Router} = require('express');
const auth = require('../middleware/auth')

const router = Router()

router.get('/', auth, (req, res) => {
    res.render('total', {
        title: 'Your Wallet',
        isTotal: true
    })
})


module.exports = router