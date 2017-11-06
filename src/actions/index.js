export const INCREASE_SCORE = 'INCREASE_SCORE'

export const increaseScore = id => ({
  type: INCREASE_SCORE,
  id
})

export const RESET_GAME = 'RESET_GAME'

export const resetGame = () => ({
  type: RESET_GAME,
})
