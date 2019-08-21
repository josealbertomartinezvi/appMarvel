const crypto = require('crypto')

const MARVEL_COMICS_URL = 'http://gateway.marvel.com/v1/public/comics'
const PUBLIC_KEY = '331136b55b8344a8194c3dc727fc5d7b'
const PRIVATE_KEY = '8f91fd227b530dfd28ec91d46b0119966a4ec3de'

class Marvel{

    constructor(){}

    getTimeStamp(){
        return new Date().valueOf().toString()
    }   

    getHash(timeStamp){
        let hashGenerator=timeStamp.concat(PRIVATE_KEY,PUBLIC_KEY)        
        let hash = crypto.createHash('md5')
                         .update(hashGenerator)
                         .digest('hex');
        return hash;
    }

    getUrlComics(comicId) {
        let requestUrl
        let timeStamp = this.getTimeStamp();
        let hash = this.getHash(timeStamp);
        if(!comicId){
            requestUrl = `${MARVEL_COMICS_URL}?ts=${timeStamp}&apikey=${PUBLIC_KEY}&hash=${hash}`
        }else{
            requestUrl = `${MARVEL_COMICS_URL}/${comicId}?ts=${timeStamp}&apikey=${PUBLIC_KEY}&hash=${hash}`
        }
        return requestUrl
    }    

    getUrlCharacters(comicId){
        let timeStamp = this.getTimeStamp();
        let hash = this.getHash(timeStamp);
        return `${MARVEL_COMICS_URL}/${comicId}/characters?ts=${timeStamp}&apikey=${PUBLIC_KEY}&hash=${hash}`        
    }

}

const marvel = new Marvel();
module.exports = marvel;