const {Router} = require('express');
const bcrypt = require('bcryptjs')
const User = require('../models/user')

const router = Router()

router.get('/login', async (req, res) => {
    res.render('auth/login', {
        title: 'SignIn',
        isLogin: true,
        loginError: req.flash('loginError'),
        registError: req.flash('registError')
    })
})

router.get('/logout', async (req, res) => {
    req.session.destroy(() => {
        res.redirect('/auth/login#login')
    })
})

router.post('/login', async (req, res) => {
    try {
        const {email, password} = req.body

        const candidate = await User.findOne({ email })

        if (candidate) {
            const isSame = await bcrypt.compare(password, candidate.password)

            if(isSame) {
                req.session.user = candidate
                req.session.isAuthenticated = true
                req.session.save(err => {
                    if(err) {
                        throw err
                    }
                    res.redirect('/')
                })
            } else {
                req.flash('loginError', 'Wrong password')
                res.redirect('/auth/login#login')
            }
        } else {
            req.flash('loginError', 'this email is not registered')
            res.redirect('/auth/login#login')
        }
    } catch (e) {
        console.log(e)
    }
})

router.post('/registration', async (req, res) => {
    try {
        const {email, password, repeat, name} = req.body

        const condidate = await User.findOne({ email })

        if(condidate) {
            req.flash('registError', 'this email is already registered')
            res.redirect('/auth/login#registration')
        } else {
            const salt = bcrypt.genSaltSync(10);
            const hashPassword = await bcrypt.hash(password, salt)
            const user = new User({
                email, name, password: hashPassword, sum: {total: []}
            })
            await user.save()
            res.redirect('/auth/login#login')
        }
    } catch (e) {
        console.log(e) 
    }
})

module.exports = router