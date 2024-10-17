const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    title: String,
    author: String,
    url: String,
    likes: Number
  })
  
blogSchema.set('toJSON', {
    transform: (document, returnObj, options) =>{
      returnObj.id = returnObj._id.toString()
      delete returnObj.__v
      delete returnObj._id
    } 
})

module.exports = mongoose.model('Blog', blogSchema)