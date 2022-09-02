import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://servcon1.vercel.app/api'
})
