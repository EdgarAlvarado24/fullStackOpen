require('dotenv').config()
const express = require('express')
const fs = require('fs')
const  bodyParser = require('body-parser')
const cors = require('cors')
const Note = require('./models/note')

const app = express()
const PORT = process.env.PORT

app.use(bodyParser.json());
app.use(cors())
app.use(express.static('dist'))

const readData = () => {
  try{
    const data = fs.readFileSync("./notes.json")
    return JSON.parse(data)
  }catch(err){
    console.log(err)
  }
}

const writeData = (data) => {
  try{
    fs.writeFileSync("./notes.json", JSON.stringify(data))
  }catch(err){
    console.log(err)
  }
}
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

app.get('/', (req, res)=>{
  console.log('puedes ser que esto funcione')
  res.send('Welcome to my fisrt Api Rest')
})

app.get('/api/notes', (request, response) => {
  Note.find({}).then(notes => {
    response.json(notes)
  })
})

app.get('/api/notes/:id', (request, response)=>{
  Note.findById(request.params.id).then(note =>{
    response.json(note)
  })
})

app.post('/api/notes', (request, response) =>{
  const body = request.body;

  if(body.content === undefined){
    return response.status(400).json({error: 'content missing'})
  }

  const note = new Note({
    content: body.content,
    important: body.important || false,
  })

  note.save()
  .then(savedNote =>{
    response.json(savedNote)
  })
  .catch(error => next(error))
})

app.put('/api/notes/:id', (request, response) =>{
  const {content, important} = request.body

  Note.findByIdAndUpdate(
    request.params.id,
    {content, important},
    {new: true, runValidators: true, context: 'query'}
  )
  .then(updatedNote => {
    response.json(updatedNote)
  })
  .catch(error => next(error))
})

app.delete('/api/notes/:id', (request, response) =>{
  Note.findByIdAndDelete(request.params.id)
    .then(result =>{
      response.status(204).end()
    })
    .catch(error => next(error))
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

// controlador de solicitudes con endpoint desconocido
app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if(error.name === 'ValidationError'){
    return response.status(400).json({error: error.message})
  }

  next(error)
}

// este debe ser el último middleware cargado, ¡también todas las rutas deben ser registrada antes que esto!
app.use(errorHandler)