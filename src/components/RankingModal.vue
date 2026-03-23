<script setup lang="ts">
import type { Ranking } from '@/types/game'

defineProps<{
  ranking: Ranking[]
}>()

defineEmits(['restart'])
</script>

<template>
  <div class="ranking-overlay">
    <div class="ranking-card">
      <h2>🏆 Hall da Fama</h2>
      <table>
        <thead>
          <tr>
            <th>Posição</th>
            <th>Nome</th>
            <th>Jogadas</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in ranking" :key="index">
            <td>{{ index + 1 }}º</td>
            <td>{{ item.nome }}</td>
            <td>{{ item.jogadas }}</td>
          </tr>
        </tbody>
      </table>
      <button @click="$emit('restart')">Jogar Novamente</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ranking-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;

  .ranking-card {
    background: #2a2a2a;
    padding: 30px;
    border-radius: 16px;
    border: 2px solid #00e7f9;
    width: 90%;
    max-width: 500px;
    text-align: center;

    h2 {
      color: #00e7f9;
      margin-bottom: 20px;
    }

    table {
      width: 100%;
      margin-bottom: 25px;
      border-collapse: collapse;

      th {
        color: #aaa;
        padding: 10px;
        border-bottom: 1px solid #444;
        text-transform: uppercase;
        font-size: 0.8rem;
      }

      td {
        padding: 12px;
        border-bottom: 1px solid #333;
        color: white;
      }

      tr:first-child td {
        color: #ffd700;
        font-weight: bold;
        font-size: 1.1rem;
      }
    }

    button {
      background: #00e7f9;
      color: black;
      border: none;
      padding: 12px 25px;
      border-radius: 8px;
      font-weight: bold;
      cursor: pointer;
      text-transform: uppercase;
      transition: 0.3s;

      &:hover {
        transform: scale(1.05);
        box-shadow: 0 0 15px rgba(0, 231, 249, 0.4);
      }
    }
  }
}
</style>
