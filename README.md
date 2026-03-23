# 🧠 Jogo da Memória - Desafio BTG

Um jogo da memória moderno, desenvolvido com **Vue 3**, **TypeScript** e **Vite**, focado em performance, componentização e persistência de dados.

## 🚀 Tecnologias Utilizadas

- **Vue 3 (Composition API)**: Para uma interface reativa e modular.
- **TypeScript**: Garantindo segurança de tipos e melhor manutenção do código.
- **Sass (SCSS)**: Para estilos avançados e escopados por componente.
- **LocalStorage**: Para persistência do Hall da Fama (Ranking).
- **Vite**: Ferramenta de build ultra-rápida.

## 🛠️ Arquitetura do Projeto

O projeto foi construído seguindo princípios de **Clean Code** e separação de responsabilidades:

- **Composables**: Toda a lógica de negócio (embaralhamento, regras de clique, vitória) está isolada no `useMemoryGame.ts`.
- **Componentização**: A interface é dividida em blocos lógicos (`WelcomeScreen`, `GameBoard`, `MemoryCard`, `RankingModal`), facilitando a manutenção.
- **Types**: Interfaces TypeScript centralizadas para garantir consistência nos dados de `Card` e `Ranking`.

## 📦 Como Executar a Aplicação

Siga os passos abaixo para rodar o projeto localmente:

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/imerlim/desafio-btg-v2.git
    ```

2.  **Entre na pasta do projeto:**

    ```bash
    cd desafio-btg-v2
    ```

3.  **Instale as dependências:**

    ```bash
    npm install
    ```

4.  **Execute o servidor de desenvolvimento:**

    ```bash
    npm run dev
    ```

5.  **Acesse no navegador:**
    O Vite informará uma URL (geralmente `http://localhost:5173`).

## 🎮 Funcionalidades

- ✅ Cadastro de nome do jogador.
- ✅ Contador de jogadas em tempo real.
- ✅ Sistema de Ranking ordenado por menor número de jogadas.
- ✅ Persistência de dados entre sessões do navegador.
- ✅ Interface responsiva e animada.
