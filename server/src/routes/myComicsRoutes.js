const express = require('express')
const router = express.Router()

const myComicsController = require('../controllers/myComicsController')
const verifyTokenMiddleware = require('../middlewares/verifyTokenMiddleware')

class MyComicsRouter{
    constructor(){
        this.config()
    }

    config(){
        router.get('/', verifyTokenMiddleware.verifyToken, myComicsController.getMyComics);
        router.get('/:id', verifyTokenMiddleware.verifyToken, myComicsController.getMyComicById)
        router.post('/', verifyTokenMiddleware.verifyToken, myComicsController.addToMyComics)
        router.delete('/:id', verifyTokenMiddleware.verifyToken, myComicsController.deleteFromMyComics)
    }
}

const myComicsRouter = new MyComicsRouter()
module.exports = router