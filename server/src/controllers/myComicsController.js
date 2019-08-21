const express = require('express')
const jwt = require('jsonwebtoken')
const CONFIG_JWT = require('../config/jwt/config')

const Comic = require('../models/ComicsModel')

class MyComicsController{

    async getMyComics(req, res) {
        await jwt.verify(req.token, CONFIG_JWT.TOKEN_SECRET, (err, authData) =>{
            if(err){
                res.sendStatus(403)
            }else{ 
                Comic.find({userId: authData.user._id}, (err, comic) =>{
                    if(err){
                        res.status(500).json('Server Error')
                    }else if(!comic){
                        res.status(409).json('Something is wrong')
                    }else{
                        res.status(200).json(comic)
                    }
                })
            }
        })        
    } 

    async getMyComicById(req, res) {
        const { id } = req.params;
        await jwt.verify(req.token, CONFIG_JWT.TOKEN_SECRET, (err, authData) =>{
            if(err){
                res.sendStatus(403)
            }else{ 
                Comic.findOne({_id: id}, (err, comic) =>{
                    if(err){
                        res.status(500).json('Server Error')
                    }else if(!comic){
                        res.status(409).json('Something is wrong')
                    }else{
                        res.status(200).json(comic)
                    }
                })
            }
        })        
    }  
    
    async addToMyComics(req, res) {
        await jwt.verify(req.token, CONFIG_JWT.TOKEN_SECRET, (err, authData) =>{
            if(err){
                res.sendStatus(403)
            }else{ 
                const newComic = {
                    userId: authData.user._id,
                    comic: req.body.comic,
                    characters: req.body.characters
                }
                Comic.create(newComic, (err, comic) => {
                    if(err){
                        res.status(500).json('Server Error')
                    }else{
                      res.status(200).json('Comic Added')  
                    }
                })
            }
        })          
         
    } 

    deleteFromMyComics(req, res) {
        const { id } = req.params;
        res.json({text: 'Comic whith id #' + id + ' deleted successfully'});
    }

}

const myComicsController = new MyComicsController();
module.exports = myComicsController;