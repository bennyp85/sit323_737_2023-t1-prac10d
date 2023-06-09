const express = require('express')
const app = express()
const routes = require('./routes')
const PORT = process.env.PORT
const calculations = require('./routes/calculations')

app.use('/', routes)

// Application will fail if environment variables are not set
if(!process.env.PORT) {
  const errMsg = "PORT environment variable is not defined"
  console.error(errMsg)
  throw new Error(errMsg)
}

if(!process.env.CALCULATOR_DB_ADDR) {
    const errMsg = "CALCULATOR_DB_ADDR environment variable is not defined"
    console.error(errMsg)
    throw new Error(errMsg)
  }

  // Connect to MongoDB, will retry only once
calculations.connectToMongoDB()

// Starts an http server on the $PORT environment variable
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});

module.exports = app