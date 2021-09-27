const Sample = require('./sample.model')

const Controller = {
  createSample(req, res) {
    let data = req.body
    Sample.createSample(data, (err, results) => {
      if(err) {
        console.log("CONTROLLER : create_sample error: ", err)
        res.status(400).send({
          success: 0,
          message: 'Failed to create sample: Sample error',
          err
        })
      }
      else {
        console.log("CONTROLLER : create_sample results: ", results)
        res.send({
          success: 1,
          message: 'successfully created a sample',
          results
        })
      }
    })
  }
}

module.exports = Controller