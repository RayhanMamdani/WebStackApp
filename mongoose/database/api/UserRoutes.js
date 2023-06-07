const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const key = require('../db').key
const mongoose = require('mongoose')
const User = require('../models/users')

router.get('/test', async (req, res) => {
    res.send("hello")
})

//register router
router.post('/register', async (req, res) => {
    //confirm password does not exist yet 
    let {name, age, address, email, password, confirmPassword} = req.body
    //passwords match
    if(password !== confirmPassword){
        return res.status(400).json({
           msg: "Passwords do not match." 
        })
    }
    console.log(email)
    let isDup = await User.findOne({email: email}).then(email => {
        return email
    })
    console.log(isDup)
    if(isDup){
        return res.status(400).json({
            msg: "Email is already registered." 
         })
    }
    
    const empty = null
    const perms = false
    let newUser = new User({
        name,
        age,
        address,
        perms,
        perms,
        perms,
        empty,
        password,
        email,
        empty
    })
    //passwordHash
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash)=>{
            if (err) throw err;
            newUser.password=hash 
            newUser.save().then(user => {
                return res.status(201).json({
                    success: true,
                    msg: "Registration successful."
                })
            })
        })
    })

})
router.post('/login', async (req, res) => {
    User.findOne({ email: req.body.email }).then(user => {
        if (!user) {
            return res.status(400).json({
                msg: "Username not found.",
                success: false
            });
        }
        bcrypt.compare(req.body.password, user.password).then(match => {
            
            if(match){
                const data = {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    
                }
                
                jwt.sign(data, key, { expiresIn: 86400000 }, (err, token) => {
                    res.status(200).json({
                        token: token,
                        msg: "Login successful",
                        success: true,
                        isUser: user.isUser,
                        isBusiness: user.isBusiness,
                        isAdmin: user.isAdmin
                        
                    });
                })

            }else{
            return res.status(404).json({
                msg: "Password is incorrect",
                success: false
            });
            }
        })
    })




})


module.exports = router
