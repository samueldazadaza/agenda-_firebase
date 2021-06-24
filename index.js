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

app.get('/', async (req, res) => {
    const peticion = await db.collection('agenda_contactos').get()
    const {docs} = peticion
    const contactos = docs.map(contacto => ({id:contacto.id, datos:contacto.data()}))
    console.log(contactos)
    res.render('index', {contactos})
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

app.get('/borrar/:id', (req, res) => {
    let id = req.params.id
    db.collection('agenda_contactos').doc(id).delete()
    res.redirect('/')
})