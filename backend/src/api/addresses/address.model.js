const db = require('../../config/database')

const Address = {
  createAddress (data, result) {
    const query = 'INSERT INTO addresses SET ?'
    db.query(query, [data], (err, results) => {
      if(err) {
        console.log('MODEL: create_address error: ', err)
        result(err, null)
      }
      else {
        console.log('MODEL: create_address results: ', results)
        result(null, results)
      }
    })
  },
  getAddressById (addressId, result) {
    const query = 'SELECT * FROM addresses WHERE addr_id = ?'
    db.query(query, [addressId], (err, results) => {
      if(err) {
        console.log('MODEL: get_addr_by_id error: ', err)
        result(err, null)
      }
      else {
        console.log('MODEL: get_addr_by_id results: ', results)
        result(null, results)
      }
    })
  }
}

module.exports = Address