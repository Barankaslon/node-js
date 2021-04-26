const {Router} = require('express');

const router = Router()

router.get('/', (req, res) => {
    res.render('invest', {
        title: 'Your Investments',
        isInvest: true
    })
})


module.exports = router