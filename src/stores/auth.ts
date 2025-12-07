import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { User, LoginData, RegisterData } from '@/types'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(
    localStorage.getItem('user') 
      ? JSON.parse(localStorage.getItem('user')!) 
      : null
  )
  
  const token = ref<string | null>(localStorage.getItem('token'))
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  const isAuthenticated = computed(() => !!token.value)
  const userRole = computed(() => user.value?.perfil)

  const login = async (credentials: LoginData) => {
    isLoading.value = true
    error.value = null
    
    try {
      // Mock para teste - depois substitua pela API real
      const mockUser: User = {
        id: '1',
        nome: credentials.email.split('@')[0],
        email: credentials.email,
        perfil: 'paciente',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
      
      const mockToken = 'mock-token-' + Date.now()
      
      token.value = mockToken
      user.value = mockUser
      
      localStorage.setItem('token', mockToken)
      localStorage.setItem('user', JSON.stringify(mockUser))
      
      return { success: true, token: mockToken, user: mockUser }
    } catch (err: any) {
      error.value = err.message || 'Erro ao fazer login'
      throw err
    } finally {
      isLoading.value = false
    }
  }

  const register = async (userData: RegisterData) => {
    isLoading.value = true
    error.value = null
    
    try {
      // Mock para teste
      const mockUser: User = {
        id: '1',
        nome: userData.nome,
        email: userData.email,
        perfil: userData.perfil,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
      
      return { success: true, user: mockUser }
    } catch (err: any) {
      error.value = err.message || 'Erro ao registrar'
      throw err
    } finally {
      isLoading.value = false
    }
  }

  const logout = () => {
    token.value = null
    user.value = null
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }

  const checkAuth = () => {
    if (token.value) {
      // Verifica se o token ainda é válido
      // Em produção, isso faria uma requisição para /auth/me
      console.log('Verificando autenticação...')
    }
  }

  return {
    user,
    token,
    isLoading,
    error,
    isAuthenticated,
    userRole,
    login,
    register,
    logout,
    checkAuth
  }
})
