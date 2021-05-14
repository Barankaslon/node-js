const {Router} = require('express');
const auth = require('../middleware/auth')

const router = Router()

router.get('/', auth, (req, res) => {
    res.render('invest', {
        title: 'Your Investments',
        isInvest: true
    })
})


module.exports = router