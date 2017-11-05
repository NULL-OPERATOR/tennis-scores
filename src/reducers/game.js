import { INCREASE_SCORE, RESET_GAME } from '../actions'

const initialState = {
  winner: '',
  players: [
    {
      id: 1,
      score: 0,
      scoreText: 'Love',
      name: 'Player 1'
    },
    {
      id: 2,
      score: 0,
      scoreText: 'Love',
      name: 'Player 2'
    }
  ]
}

const scoresToText = {
  0: 'Love',
  1: '15',
  2: '30',
  3: '40',
  4: 'Advantage'
}

const game = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_SCORE:
      return updateGame(state, action.id)
    case RESET_GAME:
      return resetGame(state)
    default:
      return state
  }
}

// how to refactor?
const updateGame = (state, id) => {
  let { winner, players } = state
  const scoringPlayer = players.find(player => player.id === id)
  const otherPlayer = players.find(player => player.id !== id)
  // p1 === id (ie, the player that has scored)
  const p1 = { ...scoringPlayer }
  const p2 = { ...otherPlayer }

  // game possibilities
  if (p1.score < 3) {
    p1.score += 1
  }
  else if (p1.score === 3 && p2.score < 3) {
    winner = p1.name
  }
  // tie break situations
  else if (p1.score === 4 && p2.score === 3) {
    winner = p1.name
  }
  else if (p1.score === 3 && p2.score === 4) {
    p2.score = 3
  }
  else if (p1.score === 3 && p2.score === 3) {
    p1.score = 4
  }

  p1.scoreText = getP1ScoreText(p1, winner)
  p2.scoreText = scoresToText[p2.score]

  return {
    winner,
    players: sortPlayersIntoArray(p1, p2)
  }
}

const getP1ScoreText = (p1, winner) => (
  winner === p1.name ? 'Game' : scoresToText[p1.score]
)

const sortPlayersIntoArray = (p1, p2) => (
  p1.id === 1 ? [p1, p2] : [p2, p1]
)

const resetGame = (state) => ({
  winner: '',
  players: state.players.map(player => ({
    ...player,
    scoreText: 'Love',
    score: 0
  }))
})


export default game
