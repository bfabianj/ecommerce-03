/*----- Módulo donde genero el router y exporto el módulo completo -----*/

import express from 'express'
import controller from '../controller/productos.js'

const router = express.Router()

/*--------------- Rutas GET ---------------*/
router.get('/:id?', controller.getProductos)

/*--------------- Rutas POST ---------------*/
router.post('/', controller.postProducto)

/*--------------- Rutas PUT ---------------*/
router.put('/:id', controller.putProducto)

/*--------------- Rutas DELETE ---------------*/
router.delete('/:id', controller.deleteProducto)

export default router