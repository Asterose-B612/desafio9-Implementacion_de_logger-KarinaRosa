import productsRouter from './productsRouter.js'
import chatRouter from './chatRouter.js'
import cartRouter from './cartRouter.js'
import userRouter from './userRoutes.js'
import upload from '../utils.js'//.js es un archivo
import express from 'express'
import { __dirname } from '../path.js'


const indexRouter = express.Router()


//defino que la ruta products va a implementar la carpeta publica
indexRouter.use('/api/products', productsRouter, express.static(__dirname + '/public'))
//productsRouter va a importar las rutas de todos esos elementos. 
//Genero ruta donde subo las imagenes.
// Luego, configura Express para servir archivos estáticos desde la carpeta '/public'
indexRouter.use(express.static(__dirname + '/public'));
indexRouter.use('/api/cart', cartRouter)
indexRouter.use('/api/chat', chatRouter, express.static(__dirname + '/public'))
indexRouter.use('/api/users', userRouter)

//PARA LA CARGA DE IMAGENES
indexRouter.post('/upload', upload.single('product'), (req, res) => {
  try {
    console.log(req.file)
    res.status(200).send("Imagen cargada correctamente")
  } catch (e) {
    res.status(500).send("Error al cargar imagen")
  }
})


export default indexRouter