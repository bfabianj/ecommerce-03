import ProductoModelMem from "./productos-mem.js"
import ProductoModelFile from "./productos-file.js"
import ProductoModelMongoDB from "./productos-mongodb.js"

class ProductoModel{
    static get(tipo){
        switch(tipo){
            case 'MEM':
                console.log('**** Persistencia en Memoria (productos) ****')
                return new ProductoModelMem()

            case 'FILE':
                console.log('**** Persistencia en File System (productos) ****')
                return new ProductoModelFile()

            case 'MONGODB':
                console.log('**** Persistencia en MongoDB (productos) ****')
                return new ProductoModelMongoDB

            default:
                console.log('**** Persistencia Default (en Memoria) (productos) ****')
                return new ProductoModelMem()
            }

    }
}

export default ProductoModel