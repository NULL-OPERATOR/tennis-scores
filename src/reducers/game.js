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

    // const setP1AsWinner = () => {
    //   p1.text = 'Game'
    //   winner = p1.name
    // }
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
    console.log(scoresToText[p1.score])
    p1.scoreText = scoresToText[p1.score]
    p2.scoreText = scoresToText[p2.score]

    if (winner === p1.name) {
      p1.scoreText = 'Game'
    }

    const sortedPlayers = p1.id === 1 ? [p1, p2] : [p2, p1]

    return {
      winner,
      players: sortedPlayers
    }

  }



const game = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE_SCORE':
      // return state
      return updateGameState(state, action.id)
    default:
      return state
  }
}

export default game
