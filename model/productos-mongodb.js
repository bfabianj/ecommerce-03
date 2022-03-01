import mongoose from "mongoose"
import DB_Mongo from "../model/DB_Mongo.js"
/*-------------- CRUD: --------------*/
/*Esquema del documento producto */
const productoSchema = mongoose.Schema({
    nombre: String,
    precio: Number,
    stock: Number,
    marca: String,
    categoria: String,
    detalles: String,
    foto: String,
    envio: Boolean,
})

/*Modelo del documento almacenado en una colección */
const ProductoModel = mongoose.model('productos', productoSchema)

class ProductoModelMongoDB{
    /*-------------- CRUD: --------------*/
    async createProducto(producto){
        if(!DB_Mongo.conexionOK) return {}
        try{
            const productoSave = new ProductoModel(producto)
            await productoSave.save()  // Agrega el nuevo producto a los productos

            let productos = await ProductoModel.find({}).lean() // lean (de mongoose) permite leer los objetos con permisos para modificación
            let productoGuardado = productos[productos.length-1] // Lee el último producto, que es el agregado.

            return DB_Mongo.genIdKey(productoGuardado) // Devuelve el último producto (el agregado).
        }
        catch(error){
            console.log(`Error en createProducto: ${error.message}`)
            return{}
        }
    }

    async readProducto(id){
        if(!DB_Mongo.conexionOK) return {}

        try{
            let producto = await ProductoModel.findOne({_id:id}).lean() // lean (de mongoose) permite leer los objetos con permisos para modificación
            //console.log(productos)
            return DB_Mongo.genIdKey(producto)
        }
        catch(error){
            console.log(`Error en readProducto: ${error.message}`)
            return{}
        }
    }

    async readProductos(){
        if(!DB_Mongo.conexionOK) return []

        try{
            let productos = await ProductoModel.find({}).lean() // lean (de mongoose) permite leer los objetos con permisos para modificación
            //console.log(productos)
            return DB_Mongo.genIdKey(productos)
        }
        catch(error){
            console.log(`Error en readProductos: ${error.message}`)
            return{}
        }
    }

    async updateProducto(id, producto){
        if(!DB_Mongo.conexionOK) return {}

        try{
            await ProductoModel.updateOne({_id:id},{$set:producto})

            let productoActualizado = await ProductoModel.findOne({_id:id}).lean()
            return DB_Mongo.genIdKey(productoActualizado)
        }
        catch(error){
            console.log(`Error en updateProducto: ${error.message}`)
            return{}
        }
    }

    async deleteProducto(id){
        if(!DB_Mongo.conexionOK) return {}
        try{
            let productoBorrado = await ProductoModel.findOne({_id:id}).lean()
            await ProductoModel.deleteOne({_id:id})

            return DB_Mongo.genIdKey(productoBorrado)
        }
        catch(error){
            console.log(`Error en deleteProducto: ${error.message}`)
            return{}
        }
    }
}

export default ProductoModelMongoDB