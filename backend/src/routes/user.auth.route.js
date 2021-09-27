const Router = require('express').Router()
const Controller = require('../api/users/user.controller')

Router.post('/register', Controller.authorization.createUser)
Router.post('/login', Controller.authorization.loginUser)

module.exports = Router