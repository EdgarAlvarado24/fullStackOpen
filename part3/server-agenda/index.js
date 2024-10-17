require('dotenv').config()
const express = require('express')
const fs = require('fs')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT
const Person = require('./models/agenda') 

app.use(express.static('dist'))
app.use(express.json())
app.use(cors())

// const readData = () =>{
//     try{
//         const data = JSON.parse(fs.readFileSync('db.json'))
//         return data
//     }catch(error){
//         console.log(error)
//     }
// }

// const writeData = (data) =>{
//     try {
//         fs.writeFileSync('db.json',JSON.stringify(data))
//     } catch (error) {
//         console.log(error)
//     }
// }

app.listen(PORT, ()=>{
    console.log(`App is runing in ${PORT}`)
})


app.get('/', (request, response) =>{
    response.send('Entrada a la api')
})


app.get('/api/persons', (request, response) =>{
    Person.find({}).then( people =>{
        response.json(people)
    })
})


app.get('/api/persons/:id', (request, response, next) =>{
    Person.findById(request.params.id)
        .then(people => {
            if(people){
                response.json(people)
            }else{
                resposne.status(400).end()
            }
        })
        .catch(error => next(error))
})

app.post('/api/persons', (request, response, next) =>{
    const {name, number} = request.body

    // if(name === undefined){
    //     response.status(400).json({error: "name missing"})
    // }else if(number === undefined){
    //     response.status(400).json({error: "number missing"})
    // }

    const person = new Person({
        name: name,
        number: number,
    })

    person.save()
    .then( people=> response.json(people))
    .catch(error => next(error))
})


app.put('/api/persons/:id',(request, response, next) =>{
    const body = request.body

    const person = {
        name : body.name,
        number : body.number,
    }

    person.save()
    .then(updatedPerson =>{
        response.json(updatedPerson)
    })
    .catch(error => next(error))
})

app.delete('/api/persons/:id',(request, response, next)=>{
    Person.findByIdAndDelete(request.params.id)
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