import express from 'express'
import {db} from './config/configuracion_firebase.js'

const app = express()

app.listen('8000', (req, res) => {
    console.log('aplicacion iniciada en localhost://8000')
})

app.set('views', './vistas' )
app.set('view engine', 'ejs')

app.use(express.static(' ./estilos'))

app.get('/', (req, res) => {
    console.log(db) // para mostrar que la conexion fue exitosa
    res.render('index')
})