const initialState = [
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


const players = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREASE_SCORE':
      return state
      // return state.map(player =>
      //   (player.id === action.id)
      //     ? {...player, score: player.score + 1}
      //     : player
      // )
    default:
      return state
  }
}

export default players
