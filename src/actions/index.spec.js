import * as actions from './index'

describe('tennis game actions', () => {
  it('increaseScore with id should create INCREASE_SCORE action', () => {
    expect(actions.increaseScore(1)).toEqual({
      type: 'INCREASE_SCORE',
      id: 1,
    })
  })

  it('resetGame should create RESET_GAME action', () => {
    expect(actions.setVisibilityFilter('active')).toEqual({
      type: 'RESET_GAME',
    })
  })
})
