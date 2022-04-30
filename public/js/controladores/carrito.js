class CarritoController{

    constructor(){
        try{
            carritoModel.inicializar(JSON.parse(localStorage.getItem('carrito')) || [])
        }
        catch{
            carritoModel.inicializar([])
            localStorage.setItem('carrito', carritoModel.obtener())

        }
    }

    agregarAlCarrito(producto){

        if(!carritoModel.productoExiste(producto)){
            producto.cantidad = 1
            carritoModel.guardar(producto)
        }else{
            let productoDeCarrito = carritoModel.obtenerProducto(producto)
            productoDeCarrito.cantidad++
        }

        localStorage.setItem('carrito', JSON.stringify(carritoModel.obtener()))
        
    }
    
    async borrarProducto(id) {
        console.log('borrarProducto: ', id)
        
        carritoModel.borrar(id)
        localStorage.setItem('carrito', JSON.stringify(carritoModel.obtener()))

        await renderCarrito(carritoModel.obtener())

    }

    async enviarCarrito(){
        var elemSectionCarrito = document.querySelector('.section-carrito')

        // Envío del Carrito al BackEnd
        elemSectionCarrito.innerHTML = '<h2> Enviando Carrito...</h2>'
        //console.log('Enviando Carrito!')

        let preference = await carritoService.guardarCarrito(carritoModel.obtener())
        console.log(preference)

        //console.log('Envío OK!')
        elemSectionCarrito.innerHTML = '<h2> Enviando Carrito...<b>OK!</b></h2>'

        // Borrar el Carrito del Modelo y del LocalStorage
        carritoModel.inicializar([])
        localStorage.setItem('carrito', carritoModel.obtener())

        // Cierro la ventana del Carrito un tiempo después
        setTimeout(async () => {
            elemSectionCarrito.classList.remove('section-carrito--visible')
            mostrarCarrito = false

            await renderPago(preference)
        }, 0)
    }
}

const carritoController = new CarritoController()