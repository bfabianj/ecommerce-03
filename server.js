/* ----- Definición de Variables ----- */
import express  from 'express'

import routerProductos from './router/productos.js'
import routerCarrito from './router/carrito.js'
import routerUpload from './router/upload.js'

import DB_Mongo from './model/DB_Mongo.js'

import config from './config.js'

if (config.TIPO_DE_PERSISTENCIA == 'MONGODB'){
    /*--------------- Conexión hacia MongoDB ---------------*/
    DB_Mongo.conectarDB()
    /*------------------------------------------------------*/
}


const app = express()

app.use(express.static('public'))
app.use(express.json())  // protocolo para enviar información a través de POSTMAN
app.use(express.urlencoded({extended: true})) // protocolo típico nativo de HTML para hacer POST

app.use('/api/productos', routerProductos)
app.use('/api/carrito', routerCarrito)
app.use('/upload', routerUpload)

/*--------------- Environment de Node.js  ---------------*/
//console.log(process.env)
console.log('process.env.PORT', process.env.PORT)
console.log('process.env.TIPO_P', process.env.TIPO_P)
console.log('process.env.CNX', process.env.CNX)

/*--------------- Listen del Servidor ---------------*/
const PORT = config.PORT
const server = app.listen(PORT, () => console.log(`Servidor escuchando en puerto ${PORT}`))
server.on('error', error => console.log (`Error en servidor express: ${error.message}`))