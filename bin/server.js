const app = require('../app')
// const cors = require('cors')

const {connectToMongo} = require('../db/connection')
require('dotenv').config()

const PORT = process.env.PORT || 4999

// app.use(cors())

app.listen(PORT, async () => {
  await connectToMongo()
  console.log(`Server running on port: ${PORT}`)
})
