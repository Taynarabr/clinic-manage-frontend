// Tipos de usuário
export interface User {
  id: string
  nome: string
  email: string
  perfil: 'admin' | 'profissional' | 'paciente'
  createdAt: string
  updatedAt: string
}

// Tipos para autenticação
export interface LoginData {
  email: string
  password: string
}

export interface RegisterData extends LoginData {
  nome: string
  perfil: User['perfil']
  cpf?: string
  telefone?: string
  consentimentoLGPD: boolean
}

// Tipos para resposta da API
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  message?: string
  error?: string
}
