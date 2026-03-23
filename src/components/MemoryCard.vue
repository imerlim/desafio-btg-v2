<script setup lang="ts">
import type { Card } from '@/types/game'

defineProps<{
  card: Card
}>()

defineEmits(['flip'])
</script>

<template>
  <div
    class="card"
    :class="{ 'is-flipped': card.isFlipped || card.isMatched }"
    @click="$emit('flip', card)"
  >
    <div class="card-front">?</div>
    <div class="card-back">{{ card.value }}</div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  aspect-ratio: 2/3;
  background: #2a2a2a;
  border: 1px solid #444;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  transition:
    transform 0.6s,
    box-shadow 0.3s;
  transform-style: preserve-3d;
  position: relative;

  &:hover {
    box-shadow: 0 0 15px rgba(0, 231, 249, 0.2);
  }

  &.is-flipped {
    transform: rotateY(180deg);
    background: #333;
  }
}

.card-front,
.card-back {
  position: absolute;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.card-front {
  color: #00e7f9;
}

.card-back {
  transform: rotateY(180deg);
  background: #2a2a2a;
}
</style>
