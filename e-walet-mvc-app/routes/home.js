const {Router} = require('express');

const router = Router()

router.get('/', (req, res) => {
    res.render('index', {
        title: 'E-Wallet',
        isHome: true
    })
})


module.exports = router