import { ref } from 'vue'
import type { Card, Ranking } from '@/types/game'
import { inject } from 'vue'

export function useMemoryGame() {
  const msg: any = inject('msg')
  const cards = ref<Card[]>([])
  const blockButton = ref(false)

  const shuffle = <T>(array: T[]): T[] => {
    let currentIndex = array.length

    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--

      const temp = array[currentIndex] as T
      array[currentIndex] = array[randomIndex] as T
      array[randomIndex] = temp
    }
    return array
  }

  const fineshedGame = ref(false)
  const nomeDigitado = ref(false)
  const numeroDeJogadas = ref(0)
  const nomeDoUsuario = ref('')

  const recomeca = () => {
    numeroDeJogadas.value = 0
    nomeDoUsuario.value = ''
    fineshedGame.value = false
    nomeDigitado.value = false
    blockButton.value = false
    cards.value = []
    arraySelecionadas.value = []

    const figurinhas = []
    figurinhas.push('🤖', '🎶', '🦴', '❤️', '👍', '👽', '👻', '🍔', '🥟', '🚓')

    const arrayDuplicado = [...figurinhas, ...figurinhas]
    shuffle(arrayDuplicado)

    for (var w = 0; w < arrayDuplicado.length; w++) {
      cards.value.push({
        id: w,
        value: arrayDuplicado[w] as string,
        isMatched: false,
        isFlipped: false,
      })
    }
  }

  const arraySelecionadas = ref<Card[]>([])
  const arrayRanking = ref<Ranking[]>([])

  const flipCard = (card: Card) => {
    if (blockButton.value || card.isMatched || card.isFlipped) return

    card.isFlipped = true
    arraySelecionadas.value.push(card)

    if (arraySelecionadas.value.length === 2) {
      numeroDeJogadas.value++
      blockButton.value = true
      comparaCartas()
    }
  }

  const checaVitoria = () => {
    const todasCorretas = cards.value.every((card) => card.isMatched)

    if (todasCorretas && cards.value.length > 0) {
      fineshedGame.value = true

      arrayRanking.value.push({
        nome: nomeDoUsuario.value || 'Anônimo',
        jogadas: numeroDeJogadas.value,
      })

      criaRank(arrayRanking.value)
      saveRanking()

      setTimeout(() => {
        msg.success(`Você ganhou o jogo com ${numeroDeJogadas.value} jogadas!`, 'Atenção')
      }, 500)
    }
  }

  const comparaCartas = () => {
    const [card1, card2] = arraySelecionadas.value
    if (!card1 || !card2) return

    if (card1.value === card2.value) {
      card1.isMatched = true
      card2.isMatched = true
      blockButton.value = false
      checaVitoria()
    } else {
      setTimeout(() => {
        card1.isFlipped = false
        card2.isFlipped = false
        blockButton.value = false
      }, 1200)
    }

    arraySelecionadas.value = []
  }

  const criaRank = (items: Ranking[]) => {
    items.sort(function (a, b) {
      if (a.jogadas > b.jogadas) {
        return 1
      }
      if (a.jogadas < b.jogadas) {
        return -1
      }

      return 0
    })
  }

  const STORAGE_KEY = 'memory-game-ranking'

  const saveRanking = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(arrayRanking.value))
  }

  const loadRanking = () => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      arrayRanking.value = JSON.parse(saved)
      criaRank(arrayRanking.value)
    }
  }

  return {
    cards,
    flipCard,
    nomeDoUsuario,
    nomeDigitado,
    recomeca,
    numeroDeJogadas,
    arrayRanking,
    fineshedGame,
    loadRanking,
  }
}
