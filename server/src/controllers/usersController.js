const User = require('../models/UsersModel')

const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const CONFIG_JWT = require('../config/jwt/config')

class UsersController{
 
    async signIn(req, res) {

        const userData = {
            email: req.body.email,
            password: req.body.password
        }
        await User.findOne({email: userData.email}, (err, user) =>{
            if(err){
                res.status(500).json({message: 'Server Error'})
            }else if(!user){
                res.status(409).json({message: 'Something is Wrong'})
            }else{
                let password = bcrypt.compareSync(userData.password, user.password) 
                if(password){
                    const expiresIn = 24*60*60 // expires in 24 hours
                    const accessToken = 'Bearer ' + jwt.sign({user}, CONFIG_JWT.TOKEN_SECRET, {expiresIn: expiresIn})
                    
                    res.status(200).json({accessToken: accessToken, expiresIn: expiresIn})
                    
                }else{
                    res.status(409).json({message: 'Something is Wrong'}) 
                }
                
            }
        })
    }

    async signUp(req, res) {
        
        const newUser = {
            name: req.body.name,
            idDocument: req.body.idDocument,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
        }

        await User.findOne({email: newUser.email}, (err, user) =>{
            if(err){
                res.status(500).json({message: 'Server Error'})
            }
            if(user){
                res.status(409).json({message: 'ID or Email already exists'})
            }else{
                User.findOne({idDocument: newUser.idDocument}, (err, user) =>{
                    if(err){
                        res.status(500).json({message: 'Server Error'})
                    }
                    if(user){
                        res.status(409).json({message: 'ID or Email already exists'})
                    }else{
                        User.create(newUser, (err, user) => {
                            if(err){
                                res.status(500).json({message: 'Server Error'})
                            }else{
                              res.status(200).json(user.name)  
                            }
                        })
                    }
                })        
            }
        })
    }     

}

const usersController = new UsersController();
module.exports = usersController;