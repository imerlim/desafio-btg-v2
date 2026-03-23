<script setup lang="ts">
import type { Card } from '@/types/game'
import MemoryCard from './MemoryCard.vue'

defineProps<{
  cards: Card[]
}>()

defineEmits(['flip'])
</script>

<template>
  <main class="game-container">
    <MemoryCard v-for="card in cards" :key="card.id" :card="card" @flip="$emit('flip', $event)" />
  </main>
</template>

<style lang="scss" scoped>
.game-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 15px;
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
}

// Responsividade: em telas menores, vira 4 colunas ou 2
@media (max-width: 600px) {
  .game-container {
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
  }
}
</style>
