const {Router} = require('express');
const auth = require('../middleware/auth')

const router = Router()

router.get('/', auth, (req, res) => {
    res.render('saving', {
        title: 'Your savings',
        isSaving: true
    })
})


module.exports = router