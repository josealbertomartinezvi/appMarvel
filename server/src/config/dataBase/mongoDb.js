'use strict';
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/marvel-comics-db', {
     useCreateIndex: true,
     useNewUrlParser: true,
     useFindAndModify: false
 })
   .then(() => console.log('DB is Conected'))
   .catch((err) => console.log(err))

module.exports = mongoose;