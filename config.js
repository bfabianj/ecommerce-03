import dotenv from 'dotenv'

//dotenv.config()   // lee del archivo x default ".env" los valores abajo requeridos
dotenv.config({     
//    path: 'miconfig.env' // lee desde otro archivo "xxxx.env" los valores abajo requeridos
    path: process.env.NODE_ENV + '.env'
})

export default{
    PORT: process.env.PORT || 8080,
    TIPO_DE_PERSISTENCIA: process.env.TIPO_P || 'MONGODB', // 'MEM', 'FILE', 'MONGODB'
    // STR_CNX: 'mongodb://127.0.0.1/ecommerce3' // MongoDB local
    STR_CNX: process.env.CNX || 'mongodb+srv://fabian:fabian090965@cluster0.wvfmo.mongodb.net/ecommerce3?retryWrites=true&w=majority'
}