// src/types/game.ts
export interface Card {
  id: number
  value: string
  isFlipped: boolean
  isMatched: boolean
}

export interface Ranking {
  nome: string
  jogadas: number
}
