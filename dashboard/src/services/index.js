import axios from 'axios'
import { router } from 'vue-router'
import AuthService from './auth'
import UsersService from './users'

const API_ENVS = {
  production: '',
  development: '',
  local: 'http://localhost:3000'
}

const httpsClient = axios.create({
  baseURL: API_ENVS.local
})

httpsClient.interceptors.request.use(config => {
  const token = window.localStorage.getItem('token')

  if (token) {
    config.headers.common.Authorization = `Bearer ${token}`
  }

  return config
})

httpsClient.interceptors.response.use((response) => response, (error) => {
  const canThrowAnnError = error.request.status === 0 || error.request.status === 500

  if (canThrowAnnError) {
    throw new Error(error.message)
  }

  if (canThrowAnnError) {
    throw new Error(error.message)
  }

  if (error.response.status === 401) {
    router.push({ name: 'Home' })
  }

  return error
})

export default {
  auth: AuthService(httpsClient),
  users: UsersService(httpsClient)
}
