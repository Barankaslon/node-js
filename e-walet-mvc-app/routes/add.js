const {Router} = require('express');
const Income = require('../models/income')
const auth = require('../middleware/auth')
const router = Router()

router.get('/', auth, (req, res) => {
    res.render('add', {
        title: 'add',
        isHome: true
    })
})

router.post('/', auth, async (req, res) => {
    /* const income = new Income(req.body.employer, req.body.position, req.body.wage) */
    const income = new Income({
        employer: req.body.employer, 
        position: req.body.position, 
        wage: req.body.wage,
        userId: req.user
    })

    try {
        await income.save()
        res.redirect('/income')
    } catch (e) {
        console.log(e)
    }

})


module.exports = router