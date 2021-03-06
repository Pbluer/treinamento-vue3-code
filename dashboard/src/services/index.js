import axios from 'axios'
import AuthService from './auth'

const API_ENVS = {
  production: '',
  development: '',
  local: 'http://localhost:3000'
}

const httpsClient = axios.create({
  baseURL: API_ENVS.local
})

httpsClient.interceptors.response.use((response) => response, (error) => {
  const canThrowAnnError = error.request.status === 0 || error.request.status === 500

  if (canThrowAnnError) {
    throw new Error(error.message)
  }

  return error
})

export default {
  auth: AuthService(httpsClient)
}
