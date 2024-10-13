const express = require('express')
const fs = require('fs')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT|| 3001

app.use(express.json())
app.use(cors())
app.use(express.static('dist'))

const readData = () =>{
    try{
        const data = JSON.parse(fs.readFileSync('db.json'))
        return data
    }catch(error){
        console.log(error)
    }
}

const writeData = (data) =>{
    try {
        fs.writeFileSync('db.json',JSON.stringify(data))
    } catch (error) {
        console.log(error)
    }
}

app.listen(PORT, ()=>{
    console.log(`App is runing in ${PORT}`)
})


app.get('/', (request, response) =>{
    response.send('Entrada a la api')
})


app.get('/api/persons', (request, response) =>{
    const data = readData();
    response.send(data)
})


app.get('/api/persons/:id', (request, response) =>{
    const data = readData()
    const id = Number(request.params.id)
    const personById = data.persons.filter((person)=>{
        return person.id == id
    })
    response.send(personById)
})

app.post('/api/persons', (request, response) =>{
    const data = readData()
    const body = request.body
    const newPerson = {
        ...body,
        id:String(data.persons.length + 1),
    }
    data.persons.push(newPerson)
    writeData(data)
    response.send(newPerson)
})


app.put('/api/persons/:id',(request, response) =>{
    const id = request.params.id
    const data = readData()
    const body = request.body

    const personIndex = data.persons.findIndex((person) => person.id === id)

    data.persons[personIndex] = {
        ...data.persons[personIndex],
        ...body
    }
    writeData(data)

    response.send(data.persons[personIndex])
})

app.delete('/api/persons/:id',(request, response)=>{
    const id = Number(request.params.id)
    const data = readData()
    const personIndex = data.persons.findIndex(person => person.id === id)

    data.persons.splice(personIndex, 1)
    writeData(data)
    response.send({message:"delete person successfully"})

})