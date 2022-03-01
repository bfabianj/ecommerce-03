import api from "../api/carrito.js"

/*--------Controlador POST--------*/
const postCarrito = async (req, res) =>{
    let carrito = req.body

    let carritoGuardado = await api.guardarCarrito(carrito)
    res.json(carritoGuardado)
}

export default {
    postCarrito
}