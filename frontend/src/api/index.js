import axios from 'axios'

const Api = axios.create({
  baseURL: 'http://localhost:5198/'
})

export default Api