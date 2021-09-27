const Router = require('express').Router()
const Controller = require('../api/addresses/address.controller')

Router.post('/', Controller.createAddress)
Router.get('/addr:addressId', Controller.getAddressById)

module.exports = Router