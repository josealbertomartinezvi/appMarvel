const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()

// const indexRoutes = require('./routes/indexRoutes')
const usersRoutes = require('./routes/usersRoutes')
const comicsRoutes = require('./routes/comicsRoutes')
const myComicsRoutes = require('./routes/myComicsRoutes')


class Server{
    constructor(){
        this.config()
        this.routes()
        this.startServer()
    }

    config(){
        //Configuration of the listening port
        app.set('port', process.env.PORT || 3000);

        app.use(express.json());
        app.use(cors())
        
        require('./config/dataBase/mongoDb')
    }

    routes(){
        // app.use('/', indexRoutes);
        app.use('/api/users', usersRoutes);
        app.use('/api/comics', comicsRoutes);
        app.use('/api/myComics', myComicsRoutes);
        // app.use('*', (req, res) =>{
        //     res.json({text: 'Page didnt find'});
        // });        
    }

    startServer(){
        app.listen(app.get('port'), () =>{
            console.log('Server on port', app.get('port'))
        })
    }
}

const server = new Server();
