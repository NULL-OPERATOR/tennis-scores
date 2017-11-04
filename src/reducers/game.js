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


const updateGameState = (state, id) => {
  let { winner, players } = state // players not immutable
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

  // convert names
  updatePlayerScores(p1, p2, winner)

  return {
    winner,
    players: sortPlayersIntoArray(p1, p2)
  }
}


const updatePlayerScores = (p1, p2, winner) => {
  if (winner === p1.name) {
    p1.scoreText = 'Game'
  } else {
    p1.scoreText = scoresToText[p1.score]
    p2.scoreText = scoresToText[p2.score]
  }
}

const sortPlayersIntoArray = (p1, p2) => {
  return p1.id === 1 ? [p1, p2] : [p2, p1]
}

const resetGame = (state) => ({
    winner: '',
    players: state.players.map(player => ({
      ...player,
      scoreText: 'Love',
      score: 0
    }))
})

const game = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE_SCORE':
      return updateGameState(state, action.id)
    case 'RESET_GAME':
      return resetGame(state)
    default:
      return state
  }
}

export default game
