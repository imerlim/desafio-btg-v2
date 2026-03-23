<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const active = ref(false)
const msgData = ref({ title: '', body: '', type: 'success' })
let timer: any = null

const handleMsg = (e: any) => {
  msgData.value = e.detail
  active.value = true

  clearTimeout(timer)
  timer = setTimeout(() => {
    active.value = false
  }, 3000)
}

onMounted(() => {
  window.addEventListener('global-msg', handleMsg)
})

onUnmounted(() => {
  window.removeEventListener('global-msg', handleMsg)
  clearTimeout(timer)
})
</script>

<template>
  <Transition name="toast">
    <div v-if="active" class="toast-container" :class="msgData.type">
      <div class="toast-icon" v-if="msgData.type === 'success'">🏆</div>
      <div class="toast-icon" v-else-if="msgData.type === 'warning'">⚠️</div>
      <div class="toast-icon" v-else>ℹ️</div>

      <div class="content">
        <strong v-if="msgData.title">{{ msgData.title }}</strong>
        <p>{{ msgData.body }}</p>
      </div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
.toast-container {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 9999;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 24px;
  border-radius: 12px;
  background: #2a2a2a;
  color: white;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  border: 1px solid #444;
  min-width: 300px;

  &.success {
    border-left: 6px solid #00e7f9;
  }
  &.warning {
    border-left: 6px solid #ffd700;
  }
  &.error {
    border-left: 6px solid #ff4444;
  }

  .content {
    display: flex;
    flex-direction: column;
    strong {
      color: #00e7f9;
      margin-bottom: 2px;
    }
    p {
      margin: 0;
      font-size: 0.9rem;
      color: #ccc;
    }
  }
}

.toast-enter-active,
.toast-leave-active {
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.toast-enter-from {
  transform: translateX(100%) scale(0.5);
  opacity: 0;
}
.toast-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
