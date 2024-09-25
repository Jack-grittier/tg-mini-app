import axios from 'axios'

const BASE_URL = import.meta.env.VITE_APP_API_URL ?? ''

export const instance = axios.create({
  baseURL: BASE_URL,
})
