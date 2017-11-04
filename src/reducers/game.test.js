import game from './game'

describe('game reducer', () => {
  const initialState = {
    winner: '',
    players: [
      {
        id: 1,
        score: 0,
        scoreText: 'Love',
        name: 'Player 1'
      }, {
        id: 2,
        score: 0,
        scoreText: 'Love',
        name: 'Player 2'
      }
    ]
  }

  it('should provide the initial state', () => {
    expect(game(undefined, {})).toEqual(initialState)
  })

  it('should handle INCREASE_SCORE action', () => {
    const expectedState = {
      winner: '',
      players: [
        {
          id: 1,
          score: 1,
          scoreText: '15',
          name: 'Player 1'
        }, {
          id: 2,
          score: 0,
          scoreText: 'Love',
          name: 'Player 2'
        }
      ]
    }
    expect(game(initialState, {type: 'INCREASE_SCORE', id: 1})).toEqual(expectedState)
  })


  it('should handle RESET_GAME action', () => {
    const inGameState = {
      winner: '',
      players: [
        {
          id: 1,
          score: 1,
          scoreText: '15',
          name: 'Player 1'
        }, {
          id: 2,
          score: 0,
          scoreText: 'Love',
          name: 'Player 2'
        }
      ]
    }
    expect(game(inGameState, { type: 'RESET_GAME', })).toEqual(initialState)
  })
})
