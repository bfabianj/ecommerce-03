class ProductosModelMem{
    productos = []

    getNextId(){
        let id = 1
        try{id = Number(this.productos[this.productos.length-1].id) +1}
        catch{}

        return id.toString()
    }

    getIndex(productos, id){
        return productos.findIndex(prod=> prod.id === id)
    }

    /*-------------- CRUD: --------------*/
    async createProducto(producto){
        producto.id = this.getNextId()
        this.productos.push(producto)

        return producto
    }

    async readProducto(id){
        let index = this.getIndex(this.productos, id)
        let producto = this.productos[index] || []
        return producto
    }

    async readProductos(){
        return this.productos
    }

    async updateProducto(id, producto){
        producto.id = id
        let index = this.getIndex(this.productos, id)
        this.productos.splice(index, 1, producto)

        return producto
    }

    async deleteProducto(id){
        let index = this.getIndex(this.productos, id)
        let producto = this.productos.splice(index, 1)[0]

        return producto
    }
}

export default ProductosModelMem