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

  it('can win the game at 40-Love', () => {
    const customInitialState = {
      winner: '',
      players: [
        {
          id: 1,
          score: 3,
          scoreText: '40',
          name: 'Player 1'
        }, {
          id: 2,
          score: 0,
          scoreText: 'Love',
          name: 'Player 2'
        }
      ]
    }
    const expectedState = {
      winner: 'Player 1',
      players: [
        {
          id: 1,
          score: 3,
          scoreText: 'Game',
          name: 'Player 1'
        }, {
          id: 2,
          score: 0,
          scoreText: 'Love',
          name: 'Player 2'
        }
      ]
    }
    expect(game(customInitialState, {type: 'INCREASE_SCORE', id: 1})).toEqual(expectedState)
  })


  it('changes to 40-40, from 40-Advantage when player 1 scores', () => {
    const customInitialState = {
      winner: '',
      players: [
        {
          id: 1,
          score: 3,
          scoreText: '40',
          name: 'Player 1'
        }, {
          id: 2,
          score: 4,
          scoreText: 'Advantage',
          name: 'Player 2'
        }
      ]
    }
    const expectedState = {
      winner: '',
      players: [
        {
          id: 1,
          score: 3,
          scoreText: '40',
          name: 'Player 1'
        }, {
          id: 2,
          score: 3,
          scoreText: '40',
          name: 'Player 2'
        }
      ]
    }
    expect(game(customInitialState, {type: 'INCREASE_SCORE', id: 1})).toEqual(expectedState)
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
