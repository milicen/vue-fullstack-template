const Address = require('./address.model')

const Controller = {
  createAddress (req, res) {
    Address.createAddress(req.body, (err, results) => {
      if(err) {
        console.log('CONTROLLER : create_addr error: ', err)
        res.send({
          success: 0,
          message: 'Cannot add address, please try again',
          results
        })
      }
      else {
        console.log('CONTROLLER : create_addr results: ', results)
        res.send({
          success: 1,
          message: 'successfully create a new address',
          results
        })
      }
    })
  },
  getAddressById (req, res) {
    // const userId = res.locals.user_id
    const addressId = req.params.addressId
    Address.getAddressById(addressId, (err, results) => {
      if(err) {
        console.log('CONTROLLER : get_addr_by_id error: ', err)
        res.send({
          success: 0,
          message: 'Cannot get office address',
          results
        })
      }
      else {
        console.log('CONTROLLER : get_addr_by_id results: ', results)
        res.send({
          success: 1,
          message: 'successfully get office address',
          results
        })
      }
    })
  }
}

module.exports = Controller