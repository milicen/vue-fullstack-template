import axios from 'axios'

const Api = axios.create({
  baseURL: 'http://localhost:6067/'
})

export default Api