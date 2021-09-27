require('dotenv').config()
const express = require('express')
const cors = require('cors')
const helmet = require('helmet-csp')

// define your routers here
const userAuthRouter = require('../src/routes/user.auth.route')
const addressRoute = require('../src/routes/address.route')

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
app.use('/', userAuthRouter)
app.use('/addresses', addressRoute)
// router middleware ends here

app.listen(process.env.SERVER_PORT, () => {
  console.log(`server starts on port ${process.env.SERVER_PORT}`)
})