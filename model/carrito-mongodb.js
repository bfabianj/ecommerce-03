import mongoose from "mongoose"
import DB_Mongo from "../model/DB_Mongo.js"
/*-------------- CRUD: --------------*/
/*Esquema del documento carrito */
const carritoSchema = mongoose.Schema({
    carrito: Array
})

/*Modelo del documento almacenado en una colección */
const CarritoModel = mongoose.model('carritos', carritoSchema)

class CarritoModelMongoDB{
    /*-------------- CRUD: --------------*/
    async createCarrito(carrito){
        if(!DB_Mongo.conexionOK) return {}
        try{
            const carritoSave = new CarritoModel({carrito: carrito})
            await carritoSave.save()

            return carrito
        }
        catch(error){
            console.log(`Error en createCarrito: ${error.message}`)
            return{}
        }
    }
}

export default CarritoModelMongoDB
