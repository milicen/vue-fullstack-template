const Router = require('express').Router()
const Controller = require('../api/sample_api/sample_api.controller')

Router.post('/', Controller.createSample)

module.exports = Router