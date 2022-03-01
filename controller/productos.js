import api from "../api/productos.js"

/*--------Controlador GET--------*/
const getProductos = async (req, res) =>{
    let id = req.params.id
    if(id){
        //let id = req.params.id

        let producto = await api.obtenerProducto(id)
        res.json(producto)
    }else{
        let productos = await api.obtenerProductos()
        res.json(productos)
    }
}

/*--------Controlador POST--------*/
const postProducto = async (req, res) =>{
    let producto = req.body

    let productoGuardado = await api.guardarProducto(producto)
    res.json(productoGuardado)
}

/*--------Controlador PUT--------*/
const putProducto = async (req, res) =>{
    let id = req.params.id
    let producto = req.body

    let productoActualizado = await api.actualizarProducto(id, producto)
    res.json(productoActualizado)
}

/*--------Controlador DELETE--------*/
const deleteProducto = async (req, res) =>{
    let id = req.params.id

    let productoBorrado = await api.borrarProducto(id)
    res.json(productoBorrado)
}

export default {
    getProductos,
    postProducto,
    putProducto,
    deleteProducto
}