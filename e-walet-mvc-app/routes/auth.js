const {Router} = require('express');
const User = require('../models/user')

const router = Router()

router.get('/login', async (req, res) => {
    res.render('auth/login', {
        title: 'SignIn',
        isLogin: true
    })
})

router.get('/logout', async (req, res) => {
    req.session.destroy(() => {
        res.redirect('/auth/login#login')
    })
})

router.post('/login', async (req, res) => {
    const user = await User.findById('60931b6fa10dca1e7cad0ecb')
    req.session.user = user
    req.session.isAuthenticated = true
    req.session.save(err => {
        if(err) {
            throw err
        }
        res.redirect('/')
    })
})

router.post('/registration', async (req, res) => {
    try {
        const {email, password, repeat, name} = req.body

        const condidate = await User.findOne({ email })

        if(condidate) {
            res.redirect('/auth/login#registration')
        } else {
            const user = new User({
                email, name, password, sum: {total: []}
            })
            await user.save()
            res.redirect('/auth/login#login')
        }
    } catch (e) {
        console.log(e) 
    }
})

module.exports = router