const express = require('express')
const router = express.Router()

const usersController = require('../controllers/usersController')

class UsersRouter{
    constructor(){
        this.config()
    }

    config(){
        router.post('/signIn', usersController.signIn);
        router.post('/signUp', usersController.signUp);
    }
}

const usersRouter = new UsersRouter()
module.exports = router