import axios from 'axios'
import type { ApiResponse, LoginData, RegisterData, User } from '@/types'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

export const authService = {
  login: (data: LoginData): Promise<ApiResponse<{ token: string; user: User }>> => 
    api.post('/auth/login', data).then(res => res.data),
  
  register: (data: RegisterData): Promise<ApiResponse<User>> => 
    api.post('/auth/register', data).then(res => res.data),
  
  me: (): Promise<ApiResponse<User>> => 
    api.get('/auth/me').then(res => res.data)
}

export default api