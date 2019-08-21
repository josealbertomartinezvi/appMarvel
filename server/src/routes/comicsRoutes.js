const express = require('express')
const router = express.Router()

const comicsController = require('../controllers/comicsController')
const verifyTokenMiddleware = require('../middlewares/verifyTokenMiddleware')

class ComicsRouter{
    constructor(){
        this.config()
    }

    config(){
        router.get('/', verifyTokenMiddleware.verifyToken, comicsController.getComics)
        router.get('/:id', verifyTokenMiddleware.verifyToken, comicsController.getComicById)
    }
}

const comicsRouter = new ComicsRouter()
module.exports = router