<template>
  <div class="app-layout">
    <!-- Header responsivo -->
    <Menubar :model="menuItems" class="app-header">
      <template #start>
        <div class="logo">
          <i class="pi pi-heart"></i>
          <span class="logo-text">ClinicManager</span>
        </div>
      </template>
      <template #end>
        <div v-if="authStore.isAuthenticated" class="user-section">
          <Avatar 
            :label="authStore.user?.nome?.charAt(0) || 'U'" 
            shape="circle" 
            class="user-avatar"
          />
          <Button 
            icon="pi pi-sign-out" 
            @click="logout" 
            text 
            rounded 
            class="logout-btn"
          />
        </div>
      </template>
    </Menubar>

    <!-- Main Content -->
    <main class="app-main">
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="app-footer">
      <p>ClinicManager © 2024 - Sistema de Gestão de Clínicas</p>
    </footer>

    <Toast />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import Menubar from 'primevue/menubar'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Toast from 'primevue/toast'

const router = useRouter()
const authStore = useAuthStore()

const menuItems = computed(() => {
  if (!authStore.isAuthenticated) return []
  
  return [
    {
      label: 'Dashboard',
      icon: 'pi pi-home',
      command: () => router.push('/')
    },
    {
      label: 'Agenda',
      icon: 'pi pi-calendar',
      command: () => router.push('/agenda')
    },
    {
      label: 'Pacientes',
      icon: 'pi pi-users',
      command: () => router.push('/pacientes')
    }
  ]
})

const logout = () => {
  authStore.logout()
  router.push('/login')
}
</script>

<style scoped>
/* Layout base */
.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-header {
  background: white;
  border-bottom: 1px solid #e5e7eb;
  padding: 0.5rem 1rem;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo i {
  font-size: 1.5rem;
  color: #3b82f6;
}

.logo-text {
  font-weight: bold;
  font-size: 1.2rem;
}

.user-section {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.app-main {
  flex: 1;
  padding: 1.5rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.app-footer {
  background: #f9fafb;
  padding: 1rem;
  text-align: center;
  border-top: 1px solid #e5e7eb;
  color: #6b7280;
  font-size: 0.875rem;
}

/* Responsividade - Tablet (768px e abaixo) */
@media (max-width: 768px) {
  .app-header {
    padding: 0.5rem;
  }
  
  .logo-text {
    font-size: 1rem;
  }
  
  .app-main {
    padding: 1rem;
  }
  
  .user-section {
    gap: 0.5rem;
  }
}

/* Responsividade - Mobile (480px e abaixo) */
@media (max-width: 480px) {
  .logo-text {
    display: none; /* Esconde texto do logo em mobile muito pequeno */
  }
  
  .app-header :deep(.p-menubar-root-list) {
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    border-top: 1px solid #e5e7eb;
  }
  
  .app-main {
    padding: 0.75rem;
  }
}

/* Ajustes para componentes PrimeVue em mobile */
@media (max-width: 768px) {
  :deep(.p-button) {
    padding: 0.5rem 0.75rem;
    font-size: 0.875rem;
  }
  
  :deep(.p-card) {
    margin: 0.5rem;
  }
}
</style>
