const initialState = {
  winner: 'Player 3',
  tieBreak: false,
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

// tieBreakScoresToText = {
//   0: '40',
//   1: 'Advantage'
// }


const updateGameState = (state, id) => {
    let newState = {...state}
    let scoring = state.players.find(player => player.id === id)
    let other = state.players.find(player => player.id !== id)

    if (scoring.score < 3 && !state.tieBreak) {
      scoring.score += 1
      scoring.text = scoresToText[scoring.score]
    }
    if (scoring.score === 4 && state.tieBreak) {
      scoring.text = 'Game'
    }
    // if () {
    //
    // }


  }

    // }
  //   return player
  //   // ? {...player, score: player.score + 1}
  //   // : player
  // )
// }


const game = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE_SCORE':
      return state
      // return updateGameState(state, action.id)
    default:
      return state
  }
}

export default game
