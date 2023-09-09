const express = require('express')

const router = express.Router()

const users = []

router.get('/add-user', (req,res)=>{

    res.render('add-user', {
        pageTitle: 'Add User',
    })
})

router.post('/add-user', (req,res)=>{
    users.push({name: req.body.user})
    console.log(users)
    res.redirect('/')
})

exports.routes = router
exports.users = users