/*----- Módulo donde genero el router y exporto el módulo completo -----*/

import express from 'express'
import controller from '../controller/carrito.js'
import pago from '../controller/pago.js'

const router = express.Router()

/*--------------- Rutas POST ---------------*/
router.post('/', controller.postCarrito)
router.get('/feedback', pago.feedBack);

export default router