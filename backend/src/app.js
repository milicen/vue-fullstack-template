require('dotenv').config()
const express = require('express')
const cors = require('cors')
const helmet = require('helmet-csp')

// define your routers here
const sampleApi = require('../src/routes/sample_api.route')

const app = express()

app.use(helmet({
  contentSequrityPolicy: {
    directives: {
      defaultSrc: ["*", "'unsafe-inline'", "'unsafe-eval'"],
      scriptSrc: ["*", "'unsafe-inline'", "unsafe-eval"],
      connectSrc: ["*", "'unsafe-inline'"],
      imgSrc: ["*", "data:", "blob:", "'unsafe-inline'"],
      frameSrc: ["*"],
      styleSrc: ["*", "'unsafe-inline'"],
      fontSrc: ["*", "'unsafe-inline'"]
    }
}
}))

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

// router middleware starts here
app.use('/sample', sampleApi)
// router middleware ends here

app.listen(process.env.SERVER_PORT, () => {
  console.log(`server starts on port ${process.env.SERVER_PORT}`)
})