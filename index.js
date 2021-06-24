import express, { response } from 'express'
import {db} from './config/configuracion_firebase.js'

const app = express()

app.listen('8002', (req, res) => {
    console.log('aplicacion iniciada en localhost://8002')
})

app.set('views', './vistas' )
app.set('view engine', 'ejs')

app.use(express.static(' ./estilos'))
app.use(express.urlencoded({extended:true})) 

app.get('/', (req, res) => {
    console.log(db)
    res.render('index')
})

app.post('/agregar', (req, res) => {
    const contacto = {
        nombre: req.body.nombre,
        numero: req.body.numero,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
    }
    db.collection('agenda_contactos').add(contacto)
    res.redirect('/')
})