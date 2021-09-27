const User = require('./user.model')
const Address = require('../addresses/address.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const Controller = {
  authorization: {
    async createUser (req, res) {
      let details = req.body.details
      let password = details.password
  
      let salt = 10
      const hash = await bcrypt.hash(password, salt)
  
      details.password = hash
      let userId = null

      await Address.createAddress(req.body.address, (err, results) => {
        if(err) {
          console.log('CONTROLLER : create_office_addr error: ', err)
          res.send({
            success: 0,
            message: 'error creating user, cannot create address',
            err
          })
        }
        else {
          console.log('CONTROLLER : create_office_addr results: ', results)

          let addressId = results.insertId

          details.addr_id = addressId

          User.createUser(details, (err, results) => {
            if(err) {
              console.log('CONTROLLER : create_user(details) error: ', err)
              res.send({
                success: 0,
                message: 'error creating user, cannot create user',
                err
              })
            }
            else {
              console.log('CONTROLLER : create_user(details) results: ', results)
              userId = results.insertId
      
              res.send({
                success: 1,
                message: 'Successfully registered',
                results
              })
            }
          })

        }
      })  
    },
    loginUser (req, res) {
      let data = req.body
      // get user by email
      User.getUserByEmail(data.email, async (err, results) => {
        if(err) {
          console.log('CONTROLLER : get_user_by_email error: ', err)
          res.send({
            success: 0,
            message: 'error getting user',
            err
          })
        }
        else if (!results[0]) {
          console.log('User not found: email is not registered')
          res.status(400).send({
            success: 0,
            message: 'Invalid email / password'
          })
        }
        else {
          console.log('CONTROLLER : get_user_by_email results: ', results)
  
          let hashTest = await bcrypt.compare(data.password, results[0].password)
  
          if(!hashTest) {
            console.log('password compare failed: password is incorrect')
            res.status(400).send({
              success: 0,
              message: 'Invalid email / password'
            })
          }
          else {
            let payload = {
              id: results[0].user_id,
              username: results[0].username,
            }
            const token = jwt.sign(payload, process.env.JWT_ACCESS_TOKEN_SECRET, {
              expiresIn: '30m'
            })
            res.send({
              success: 1,
              message: 'login successful',
              payload: payload,
              token: token
            })
          }
        }
      })
    }
  },
  misc: {
    getUserById (req, res) {
      const userId = res.locals.user_id
      User.getUserById(userId, (err, results) => {
        if(err) {
          console.log('CONTROLLER : get_user_by_id error: ', err)
          res.send({
            success: 0,
            message: 'user doesn\'t exist',
            err
          })
        }
        else {
          console.log('CONTROLLER : get_user_by_id results: ', results)
          res.send({
            success: 1,
            message: 'successfully get user by id',
            results
          })
        }
      })
    }
  }
}

module.exports = Controller