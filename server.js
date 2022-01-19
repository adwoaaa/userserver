require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const userController = require('./controller/user_controller');

const server = express();

server.listen(process.env.SERVER_PORT,function(){
    console.log('Server is running...');
    mongoose.connect(process.env.ATLAS_DB)
    .then(function(){
        console.log('ATLAS DB CONNECTED');
        server.use(express.json());

        server.post('/auser',userController.addNewUser);
        server.get('/users',userController.getthreeUsers);

    })
    .catch(function(error){
        console.log(error.message);
    });
});