const getJSON = require('get-json')
const marvelKeys = require('../config/marvel')
const jwt = require('jsonwebtoken')
const CONFIG_JWT = require('../config/jwt/config')

const Comic = require('../models/ComicsModel')


class ComicsController{

    async getComics (req, res) {
        await jwt.verify(req.token, CONFIG_JWT.TOKEN_SECRET, (err, authData) =>{
             if(err){
                 res.sendStatus(403)
             }else{
                let url = marvelKeys.getUrlComics()
                    getJSON(url)
                        .then( (data) => {
                            let comic;
                            let comics = new Array(); 
                            for(let i = 0; i < data.data.results.length; i++){
                                comic = 
                                    {
                                        id: data.data.results[i].id,
                                        title: data.data.results[i].title,
                                        img: `${data.data.results[i].thumbnail.path}.jpg`
                                    }
                                
                                comics.push(comic)
                            }

                            let user = {
                                userId: authData.user._id,
                                name: authData.user.name
                            }

                            

                            res.json(comics)
                        }).catch( (error) => {
                            console.log(error);
                        })
                        
             }
        })
    } 

    async getComicById(req, res) {
        await jwt.verify(req.token, CONFIG_JWT.TOKEN_SECRET, (err, authData) =>{
            if(err){
                res.status(403).json({message: 'Access denied'})
            }else{
                let { id } = req.params               
                let comicAdded = false    
                let comic
                let urlComics = marvelKeys.getUrlComics(id)

                let character
                let characters = new Array()
                let urlCharacters = marvelKeys.getUrlCharacters(id)

                // Validates if this comic has been added to my comics list    
                Comic.findOne({'comic.id': id}, (err, comic) =>{
                    if(!comic){
                        comicAdded = false
                    }else{
                        comicAdded = true
                    }
                })

                getJSON(urlComics)
                .then((data) => {
                    comic = {
                        id: data.data.results[0].id,
                        title: data.data.results[0].title,
                        description: data.data.results[0].description,
                        img: `${data.data.results[0].thumbnail.path}.jpg`
                    }   
                    getJSON(urlCharacters)
                    .then((data) => {
                        for(let i = 0; i < data.data.results.length; i++){
                            character = {
                                    id: data.data.results[i].id,
                                    name: data.data.results[i].name,
                                    img: `${data.data.results[i].thumbnail.path}.jpg`
                                }
                            characters.push(character)
                        } 
                        res.json({'comic': comic, 'characters': characters, 'isOnMyList': comicAdded})
                    }).catch( (error) => {
                        console.log(error);
                    })                     
                }).catch( (error) => {
                    console.log(error);
                }) 
            }
        })
    }
}

const comicsController = new ComicsController();
module.exports = comicsController;
  