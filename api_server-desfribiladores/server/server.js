

//----------------------Variável de servidor----------------------//
const express = require('express'); //importação do módulo do Express
const serverInstance = express(); //cria uma instância do tipo servidor
serverInstance.listen(3000,()=>console.log('server init')) //inicializa servidor
//--------------------------------------------------------------//

//-------------------Variável de rotas e Json-------------------//
const routes = require('../routes/routes')
serverInstance.use(routes);
serverInstance.use(express.json);
//--------------------------------------------------------------//

