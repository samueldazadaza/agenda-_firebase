import express, { response } from 'express'
import {db} from './config/configuracion_firebase.js'

const app = express()
const PORT = process.env.PORT || 8000

app.listen(PORT, (req, res) => {
    console.log('La aplicacion fue iniciada correctamente en: 😎🎯 http://localhost:8000')
})

app.set('views', './vistas' )
app.set('view engine', 'ejs')

app.use(express.static(' ./estilos'))
app.use(express.urlencoded({extended:true})) 

app.get('/', async (req, res) => {
    const peticion = await db.collection('agenda_contactos').get()
    const {docs} = peticion
    const contactos = docs.map(contacto => ({id:contacto.id, datos:contacto.data()}))
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

app.get('/contacto/:id', async(req, res) => {
    let id = req.params.id
    const peticion = await db.collection('agenda_contactos').doc(id).get()
    const contacto = { id:id, datos:peticion.data()}
    res.render('contacto', {contacto})
})