const db = require('../../config/database')

const Sample = {
  createSample(data, result) {
    const query = 'INSERT INTO sample_data SET ?'
    db.query(query, [data], (err, results) => {
      if(err) {
        console.log('MODEL: create_sample error: ', err)
        result(err, null)
      }
      else {
        console.log('MODEL: create_sample results: ', results)
        result(null, results)
      }
    })
  }
}

module.exports = Guest