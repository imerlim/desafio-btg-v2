<script setup lang="ts">
defineProps<{
  modelValue: string
}>()

const emit = defineEmits(['update:modelValue', 'start'])

const onInput = (e: Event) => {
  const target = e.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>

<template>
  <div class="welcome-screen">
    <div class="login-card">
      <h1>🧠 Jogo da Memória</h1>
      <p>Prepare sua mente! Digite seu nome para começar:</p>

      <input
        :value="modelValue"
        @input="onInput"
        placeholder="Seu nome aqui..."
        @keyup.enter="emit('start')"
      />

      <button @click="emit('start')">Entrar no Jogo</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.welcome-screen {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(circle, #1a1a1a 0%, #000 100%);

  .login-card {
    background: #2a2a2a;
    padding: 40px;
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0, 231, 249, 0.1);
    text-align: center;
    border: 1px solid #444;
    max-width: 400px;
    width: 90%;

    h1 {
      color: #00e7f9;
      margin-bottom: 10px;
    }
    p {
      color: #aaa;
      margin-bottom: 25px;
    }

    input {
      width: 100%;
      padding: 12px;
      margin-bottom: 20px;
      background: #1a1a1a;
      border: 2px solid #444;
      border-radius: 8px;
      color: white;
      font-size: 1.1rem;
      text-align: center;
      transition: border-color 0.3s;

      &:focus {
        border-color: #00e7f9;
        outline: none;
      }
    }

    button {
      width: 100%;
      padding: 14px;
      background: #00e7f9;
      color: black;
      border: none;
      border-radius: 8px;
      font-weight: bold;
      cursor: pointer;
      text-transform: uppercase;
      transition: 0.3s;

      &:hover:not(:disabled) {
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(0, 231, 249, 0.4);
      }

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }
  }
}
</style>
