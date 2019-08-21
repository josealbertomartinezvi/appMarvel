const mongoose = require('mongoose')
const { Schema } = mongoose

const ComicsSchema = new Schema({
    userId: String,
    comic: {
        id: String,
        title: String,
        description: String,
        img: String     
    },
    characters: [{
        id: String,
        name: String,
        img: String
    }]

})


module.exports = mongoose.model('Comics', ComicsSchema)