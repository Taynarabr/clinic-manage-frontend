<template>
  <AppLayout v-if="authStore.isAuthenticated" />
  <router-view v-else />
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useAuthStore } from '@/stores/auth'
import AppLayout from '@/components/layout/AppLayout.vue'

const authStore = useAuthStore()

onMounted(() => {
  authStore.checkAuth()
})
</script>

<style>
/* Reset e base responsiva */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: system-ui, -apple-system, sans-serif;
  background: #f8fafc;
  font-size: 16px; /* Base para rem */
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Responsividade com media queries */
@media (max-width: 768px) {
  body {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  body {
    font-size: 13px;
  }
}

/* Transições */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.2s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
