const db = require('../../config/database')

const User = {
  createUser (data, result) {
    const query = 'INSERT INTO users SET ?'
    db.query(query, [data], (err, results) => {
      if(err) {
        console.log('MODEL: create_user error: ', err)
        result(err, null)
      }
      else {
        console.log('MODEL: create_user results: ', results)
        result(null, results)
      }
    })
  },
  getUserByEmail (email, result) {
    const query = 'SELECT * FROM users WHERE users.email = ?'
    db.query(query, [email], (err, results) => {
      if(err) {
        console.log('MODEL: get_user_by_email error: ', err)
        result(err, null)
      }
      else {
        console.log('MODEL: get_user_by_email results: ', results)
        result(null, results)
      }
    })
  },
  getUserById (userId, result) {
    const columns = 'users.username, users.email, users.phone, ' +
    'addresses.*'

    const joinTables = 'INNER JOIN addresses ON addresses.addr_id = users.addr_id'

    // const query = `SELECT ${columns} FROM users ${joinTables} WHERE users.user_id = ?`
    const query = `SELECT ${columns} FROM users ${joinTables} WHERE users.user_id = ?`
    db.query(query, [userId], (err, results) => {
      if(err) {
        console.log('MODEL: get_user_by_id error: ', err)
        result(err, null)
      }
      else {
        console.log('MODEL: get_user_by_id results: ', results)
        result(null, results)
      }
    })
  }
}

module.exports = User