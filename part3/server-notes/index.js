const express = require('express')
const fs = require('fs')
const  bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 3001

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

app.get('/api/notes', (req, res)=>{
  const data = readData()
  res.send(data.notes)
})

app.get('/api/notes/:id', (req, res)=>{
  const data = readData()
  const id = req.params.id
  const note = data.notes.filter(note => note.id == id ? note : '')
  res.send(note)
})

app.post('/api/notes', (req, res) =>{
  const data = readData();
  const body = req.body;
  const newNote = {
    id: data.notes.length + 1,
    ...body
  };
  data.notes.push(newNote);
  writeData(data)
  console.log(newNote)
  res.json(newNote)
})

app.put('/api/notes/:id', (req, res) =>{
  const data = readData();
  const body = req.body;
  const id = Number(req.params.id)
  const noteIndex = data.persons.findIndex((note) => note.id === id)
  data.notes[noteIndex] = {
    ...data.notes[noteIndex],
    ...body
  };
  writeData(data);
  res.json({message: "note updated successfully"})
})

app.delete('/api/notes/:id', (req, res) =>{
  const data = readData();
  const id = Number(req.params.id)
  const noteIndex = data.notes.findIndex((note) => note.id == id)
  data.notes.splice(noteIndex,1);
  writeData(data)
  res.json({message: "note deleted successfully"})
})
