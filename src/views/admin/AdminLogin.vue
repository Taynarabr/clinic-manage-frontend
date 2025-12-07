<template>
  <div class="login-page">
    <div class="login-card">
      <div class="card-header">
        <img :src="logo" alt="Gerente de Clínica Logo" class="logo-placeholder" />
        <h2 class="app-name">Gerente de Clínica</h2>
      </div>
      
      <h1 class="portal-title">Portal Administrativo</h1>
      <p class="access-note">Acesso exclusivo para administradores.</p>

      <form @submit.prevent="handleLogin" class="login-form">
        <div class="form-group">
          <label for="email" class="sr-only">E-mail</label>
          <input 
            type="email" 
            id="email" 
            v-model="email" 
            placeholder="E-mail" 
            class="input-field"
            required
          />
          <span class="icon-prefix">📧</span>
        </div>

        <div class="form-group">
          <label for="password" class="sr-only">Senha</label>
          <input 
            type="password" 
            id="password" 
            v-model="password" 
            placeholder="Senha" 
            class="input-field"
            required
          />
          <span class="icon-prefix">🔒</span>
        </div>

        <button type="submit" class="login-button">
          Entrar
        </button>
      </form>
      
      <a href="#" class="back-link">
        <span class="arrow-icon">←</span> Voltar ao site
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import logo from '../../logo.png'; // caminho corrigido

// Estados reativos
const email = ref('');
const password = ref('');

// Router para redirecionamento
const router = useRouter();

const handleLogin = () => {
  console.log('Tentativa de Login...');
  console.log('E-mail:', email.value);
  console.log('Senha:', password.value);

  // Exemplo de login simulado
  if (email.value === 'admin@test.com' && password.value === '123456') {
    alert('Login realizado com sucesso!');
    router.push('/dashboard'); // Redireciona para dashboard
  } else {
    alert('Credenciais inválidas.');
  }
};
</script>

<style scoped>
:root {
  --primary-color: #7b1fa2;
  --secondary-color: #c2185b;
  --button-color: #c2185b;
  --button-hover: #b01550;
  --card-background: #ffffff;
  --text-color: #333333;
  --light-text: #666666;
  --input-border: #cccccc;
}

.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #a63f8d 0%, #7b1fa2 100%);
  padding: 20px;
}

.login-card {
  background-color: var(--card-background);
  padding: 40px 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 380px;
  text-align: center;
}

.card-header {
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo-placeholder {
  width: 60px;
  height: 60px;
  background-color: #ccc;
  border-radius: 50%;
  margin-bottom: 10px;
}

.app-name {
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--text-color);
  margin: 0;
}

.portal-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-color);
  margin: 5px 0;
}

.access-note {
  font-size: 0.9rem;
  color: var(--light-text);
  margin-bottom: 30px;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 25px;
}

.form-group {
  position: relative;
  width: 100%;
}

.input-field {
  width: 100%;
  padding: 12px 15px;
  padding-left: 45px;
  border: 1px solid var(--input-border);
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s;
  box-sizing: border-box;
}

.input-field:focus {
  border-color: var(--primary-color);
  outline: none;
  box-shadow: 0 0 0 2px rgba(123, 31, 162, 0.2);
}

.icon-prefix {
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
  color: var(--light-text);
  pointer-events: none;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

.login-button {
  background-color: var(--button-color);
  color: white;
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.1s;
  box-shadow: 0 4px 10px rgba(194, 24, 91, 0.3);
}

.login-button:hover {
  background-color: var(--button-hover);
}

.login-button:active {
  transform: scale(0.99);
}

.back-link {
  color: var(--light-text);
  text-decoration: none;
  font-size: 0.95rem;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  transition: color 0.3s;
}

.back-link:hover {
  color: var(--primary-color);
}

.arrow-icon {
  font-weight: bold;
  font-size: 1.1rem;
}
</style>
