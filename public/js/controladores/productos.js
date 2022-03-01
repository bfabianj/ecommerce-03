class ProductosController {
    async obtenerProductos(){
        let productos = await productosService.obtenerProductos()
        return productos
    }

    async guardarProducto(producto){
        // Persisto en el BackEnd
        let productoGuardado = await productosService.guardarProducto(producto)

        // Actualizo Modelo Local
        productosModel.guardar(productoGuardado)

        // Recargo la Vista
        renderProds(productosModel.obtener())

        return productoGuardado
    }

    async actualizarProducto(id){
        //console.log('actualizarProducto', id)

        // Obtengo los datos del formulario
        let producto = leerProductoIngresado()
        limpiarFormulario()

        // Actualizo el BackEnd
        let productoActualizado = await productosService.actualizarProducto(id, producto)

        // Actualizar Producto en Modelo Local
        productosModel.actualizar(id, productoActualizado)
        // Recargo la Vista
        renderProds(productosModel.obtener())


        return productoActualizado
    }

    async borrarProducto(id){
        // console.log('borrarProducto', id)

        // Borro en el BackEnd
        let productoBorrado = await productosService.borrarProducto(id)

        // Borro Producto en Modelo Local
        productosModel.borrar(id)

        // Recargo la Vista
        renderProds(productosModel.obtener())

        return productoBorrado

    }
}

const productosController = new ProductosController()