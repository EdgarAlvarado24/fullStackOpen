const app = require('./app')
const {PORT, MONGODB_URI} = require('./utils/config')
const {info, error} = require('./utils/logger')

app.listen(PORT, () => {
  info(`Server running on port ${PORT}`)
})