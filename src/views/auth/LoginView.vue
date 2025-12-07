<template>
  <div class="login-page">
    <div class="login-container">
      <Card class="login-card">
        <template #title>
          <div class="card-title">
            <i class="pi pi-heart" style="font-size: 2rem; color: var(--primary-500)"></i>
            <h1>ClinicManager</h1>
          </div>
          <h2>Login</h2>
        </template>
        
        <template #content>
          <form @submit.prevent="handleLogin" class="login-form">
            <div class="field">
              <label for="email" class="block text-900 font-medium mb-2">Email</label>
              <InputText
                id="email"
                v-model="form.email"
                type="email"
                placeholder="seu@email.com"
                class="w-full mb-3"
                :class="{ 'p-invalid': errors.email }"
              />
              <small v-if="errors.email" class="p-error">{{ errors.email }}</small>
            </div>
            
            <div class="field">
              <label for="password" class="block text-900 font-medium mb-2">Senha</label>
              <Password
                id="password"
                v-model="form.password"
                placeholder="Digite sua senha"
                :feedback="false"
                toggleMask
                class="w-full mb-3"
                inputClass="w-full"
                :class="{ 'p-invalid': errors.password }"
              />
              <small v-if="errors.password" class="p-error">{{ errors.password }}</small>
            </div>
            
            <Button
              type="submit"
              label="Entrar"
              icon="pi pi-sign-in"
              :loading="authStore.isLoading"
              class="w-full"
            />
            
            <Divider />
            
            <div class="text-center">
              <p class="text-600 font-medium mb-3">Credenciais de demonstração:</p>
              <div class="demo-credentials">
                <p><strong>Admin:</strong> admin@clinic.com / senha123</p>
                <p><strong>Profissional:</strong> medico@clinic.com / senha123</p>
                <p><strong>Paciente:</strong> paciente@clinic.com / senha123</p>
              </div>
            </div>
          </form>
        </template>
      </Card>
    </div>
    
    <Toast />
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { useToast } from 'primevue/usetoast'
import Card from 'primevue/card'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import Button from 'primevue/button'
import Divider from 'primevue/divider'
import Toast from 'primevue/toast'

const router = useRouter()
const authStore = useAuthStore()
const toast = useToast()

const form = reactive({
  email: '',
  password: ''
})

const errors = reactive({
  email: '',
  password: ''
})

const validateForm = (): boolean => {
  let isValid = true
  errors.email = ''
  errors.password = ''
  
  if (!form.email.trim()) {
    errors.email = 'Email é obrigatório'
    isValid = false
  }
  
  if (!form.password.trim()) {
    errors.password = 'Senha é obrigatória'
    isValid = false
  }
  
  return isValid
}

const handleLogin = async (): Promise<void> => {
  if (!validateForm()) return
  
  try {
    await authStore.login({
      email: form.email,
      password: form.password
    })
    
    toast.add({
      severity: 'success',
      summary: 'Login realizado!',
      detail: 'Bem-vindo ao ClinicManager',
      life: 3000
    })
    
    router.push('/')
  } catch (error: any) {
    toast.add({
      severity: 'error',
      summary: 'Erro no login',
      detail: error.message || 'Credenciais inválidas',
      life: 5000
    })
  }
}
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, var(--primary-500) 0%, var(--primary-700) 100%);
  padding: 1rem;
}

.login-container {
  width: 100%;
  max-width: 450px;
}

.login-card {
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.card-title {
  text-align: center;
  margin-bottom: 1.5rem;
}

.card-title h1 {
  color: var(--primary-700);
  margin-top: 0.5rem;
}

.card-title h2 {
  color: var(--text-color);
  margin-bottom: 1rem;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.demo-credentials {
  background: var(--surface-100);
  padding: 1rem;
  border-radius: 6px;
  font-size: 0.875rem;
}

.demo-credentials p {
  margin: 0.25rem 0;
}
</style>
