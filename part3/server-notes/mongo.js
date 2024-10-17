require('dotenv').config();
const mongoose = require('mongoose')

// if (process.argv.length < 3){
//     console.log('give password as argument')
//     process.exit(1)
// }

const password = process.env.MONGODB_PASSWORD

const url = `mongodb+srv://admin:${password}@cluster0.bipi9.mongodb.net/noteApp?retryWrites=true&w=majority`

console.log(url)

mongoose.set('strictQuery',false)

mongoose.connect(url)
  .then(() => console.log('Connected to MongoDB Atlas!'))
  .catch(error => console.error('Error connecting to MongoDB Atlas:',   
 error));

const noteSchema = new mongoose.Schema({
    content: String,
    important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

// const note = new Note({
//     content: "HTML is easy",
//     important: true,
// })


// note.save().then(result =>{
//     console.log('note saved!')
//     mongoose.connection.close()
// })

Note.find({ important: true}).then(result =>{
    result.forEach(note =>{
        console.log(note)
    })
    mongoose.connection.close()
})