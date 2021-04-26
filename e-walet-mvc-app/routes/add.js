const {Router} = require('express');

const router = Router()

router.get('/', (req, res) => {
    res.render('add', {
        title: 'add',
        isHome: true
    })
})


module.exports = router