const data = require('../data/data.json');

//-------------------Modulo Gerenciador de Rotas-------------------//
const express = require('express');
const routes = express.Router(); //modulo de gerenciamento de rotas
module.exports = routes;
//----------------------------------------------------------------//
//------------------------------CORS------------------------------//
var corsServer = require('cors');
//serverInstance.use(corsServer());
routes.use((req,res,next)=>{
    console.log("Acessou o middle!");
    res.header("Access-Control-Allow-Origin","http://localhost:4200");
    routes.use(corsServer());
    next();
});
//--------------------------------------------------------------//


//--------------------Método de Requisição: GET--------------------//
routes.get('/',(req,res)=>{
    res.send('Hello World! =]');
}
);
routes.get('/equipamentos',(req,res)=>{
    console.log('return data');
    //res.send(data.patients);
    return res.json(data.equipamentos);
}
);   
//----------------------------------------------------------------//

