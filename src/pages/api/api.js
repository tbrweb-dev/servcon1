import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://www.servcon1.com/api'
})
