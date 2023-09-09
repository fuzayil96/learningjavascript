const express =require('express')

const router = express.Router()
const adminData = require('./admin')

router.get('/', (req,res)=>{
    const users = adminData.users
    res.render('user', {
        usrs: users,
        pageTitle: 'Users'
    })
})

module.exports = router;