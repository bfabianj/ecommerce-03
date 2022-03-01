class CarritoService {
    URL_CARRITO = 'https://61f9940e69307000176f733b.mockapi.io/carrito/'

    async guardarCarrito(carrito){
        let carritoGuardado = await http.post(this.URL_CARRITO, carrito)
        return carritoGuardado
    }
}

const carritoService = new CarritoService()