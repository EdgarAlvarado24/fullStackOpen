require('dotenv').config()
const mongoose = require('mongoose')

mongoose.set('strictQuery',false)

const url = process.env.MONGODB_URI

console.log('connecting to', url)

mongoose.connect(url)
  .then(() => 
    console.log('Connected to MongoDB Atlas!'))
  .catch(error => 
    console.error('Error connecting to MongoDB Atlas:',error));

const formatValid = [
  {validator: (format) => /\d{2}-\d{2}-\d{6}/.test(format)},
  {validator: (format) => /\d{3}-\d{8}/.test(format)},
  {validator: (format) => /\d{2}-\d{7}/.test(format)},
  {validator: (format) => /\d{1}-\d{8}/.test(format)},
  {validator: (format) => /\d{8}/.test(format)},
]

 const personSchema = new mongoose.Schema({
    name: {
      type: String,
      minLength: 3,
    },
    number: {
      type: String,
      minLength: 8,
      validate: formatValid
    },
})

personSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })

module.exports = mongoose.model('Person', personSchema)