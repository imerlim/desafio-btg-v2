<script setup lang="ts">
import { useMemoryGame } from '@/composables/useMemoryGame'
import { onMounted } from 'vue'
import WelcomeScreen from '@/components/WelcomeScreen.vue'
import RankingModal from '@/components/RankingModal.vue'
import GameBoard from '@/components/GameBoard.vue'

const {
  cards,
  flipCard,
  nomeDoUsuario,
  nomeDigitado,
  recomeca,
  numeroDeJogadas,
  arrayRanking,
  fineshedGame,
  loadRanking,
} = useMemoryGame()

onMounted(() => {
  loadRanking()
  recomeca()
})

const digitouNome = () => {
  if (!nomeDoUsuario.value) {
    alert('Digite seu nome para começar!')
  } else {
    nomeDigitado.value = true
  }
}
</script>

<template>
  <div class="view-container">
    <WelcomeScreen v-if="!nomeDigitado" v-model="nomeDoUsuario" @start="digitouNome" />

    <div v-else class="game-view">
      <header class="game-header">
        <h1>
          Bem-vindo, <span>{{ nomeDoUsuario }}</span>
        </h1>
        <div class="stats">
          <h2>
            Jogadas: <strong>{{ numeroDeJogadas }}</strong>
          </h2>
        </div>
      </header>

      <GameBoard :cards="cards" @flip="flipCard" />

      <RankingModal v-if="fineshedGame" :ranking="arrayRanking" @restart="recomeca" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
:global(body, html) {
  margin: 0;
  padding: 0;
  background: #1a1a1a;
}

.view-container {
  min-height: 100vh;
  background: #1a1a1a;
}

.game-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  color: white;
}

.game-header {
  text-align: center;
  margin-bottom: 40px;

  h1 span {
    color: #00e7f9;
  }

  .stats h2 strong {
    color: #00e7f9;
  }
}
</style>
