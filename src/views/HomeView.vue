<template>
  <div class="home">
    <h1>Bem-vindo ao ClinicManager 🏥</h1>
    <p>Sistema de Gestão de Clínicas</p>
    
    <div class="features">
      <Card class="feature-card">
        <template #title>Agendamentos Online</template>
        <template #content>
          <p>Agende consultas de forma rápida e prática</p>
        </template>
      </Card>
      
      <Card class="feature-card">
        <template #title>Prontuário Eletrônico</template>
        <template #content>
          <p>Histórico completo dos pacientes</p>
        </template>
      </Card>
      
      <Card class="feature-card">
        <template #title>Gestão de Pacientes</template>
        <template #content>
          <p>Controle total dos dados dos pacientes</p>
        </template>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import Card from 'primevue/card'
</script>

<style scoped>
.home {
  text-align: center;
  padding: 2rem;
}

.home h1 {
  color: var(--primary-700);
  margin-bottom: 1rem;
}

.features {
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin-top: 3rem;
  flex-wrap: wrap;
}

.feature-card {
  width: 300px;
}
</style>