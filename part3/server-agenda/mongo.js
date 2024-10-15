const mongoose = require('mongoose')

if (process.argv.length < 3){
    console.log('give password as argument')
    process.exit(1)
}

const password = process.argv[2]
const namePerson = process.argv[3]
const numberPerson = process.argv[4]

const url = `mongodb+srv://admin:${password}@cluster0.bipi9.mongodb.net/personsApp?retryWrites=true&w=majority`

mongoose.set('strictQuery',false)


mongoose.connect(url)
  .then(() => console.log('Connected to MongoDB Atlas!'))
  .catch(error => console.error('Error connecting to MongoDB Atlas:',   
 error));

 const personSchema = new mongoose.Schema({
    name: String,
    number: String,
})

const Person = mongoose.model('Person', personSchema)

if (process.argv.length == 5 && namePerson && numberPerson) {
    
    const person = new Person({
        name: namePerson,
        number: numberPerson,
    })
    
    person.save().then(result =>{
        console.log(`added ${namePerson} ${numberPerson} to phonebook`)
        mongoose.connection.close()
    })
} else if (process.argv.length == 3 && Person){
    Person.find({}).then(result =>{
        console.log('phonebook:')
        result.forEach(people =>{
            console.log(`${people.name} ${people.number}`)
        })
        mongoose.connection.close()
    })
}else{
    console.log('Please provide password and either name/number or just password for listing');

}

