/*----- Módulo donde genero el router y exporto el módulo completo -----*/

import express from 'express'
import controller from '../controller/carrito.js'

const router = express.Router()

/*--------------- Rutas POST ---------------*/
router.post('/', controller.postCarrito)

export default router