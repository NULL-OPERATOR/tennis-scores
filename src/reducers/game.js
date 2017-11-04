const initialState = {
  winner: 'Player 3',
  players: [
    {
      id: 1,
      score: 0,
      name: 'Player 1'
    },
    {
      id: 2,
      score: 0,
      name: 'Player 2'
    }
  ]
}

const game = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE_SCORE':
      // console.log('action id', action.id)
      // return state
      return {
        ...state,
        players: state.players.map(player =>
          (player.id === action.id)
          ? {...player, score: player.score + 1}
          : player
        )
      }
    default:
      return state
  }
}

export default game
