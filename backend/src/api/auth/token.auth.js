const jwt = require('jsonwebtoken')

module.exports = {
  checkToken (req, res, next) {
    const {authorization} = req.headers
    let token = authorization.split(' ')[1]

    if(token) {
      jwt.verify(token, process.env.JWT_ACCESS_TOKEN_SECRET, (err, decoded) => {
        if(err instanceof jwt.TokenExpiredError) {
          console.log('AUTH : check_token error: token expired')
          res.send({
            unauthorized: true,
            message: 'Unauthorized user: session expired'
          })
        }
        else {
          console.log('decoded : ', decoded)
          res.locals.user_id = decoded.id
          next()
        }
      })
    }
    else {
      console.log('AUTH : check_token error: undefined token')
      res.send({
        unauthorized: true,
        message: 'Unauthorized user: undefined token'
      })
    }
  }
}