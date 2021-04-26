const {Router} = require('express');

const router = Router()

router.get('/', (req, res) => {
    res.render('saving', {
        title: 'Your savings',
        isSaving: true
    })
})


module.exports = router