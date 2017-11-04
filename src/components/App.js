import React from 'react'
import PlayersList from '../containers/PlayersList'
import GameStatus from '../containers/GameStatus'
import AddScores from '../containers/AddScores'

const App = () => (
  <div>
    <PlayersList />
    <GameStatus />
    <AddScores />
    {/* <Reset /> */}
  </div>
)

export default App
