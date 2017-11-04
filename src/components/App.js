import React from 'react'
import PlayersList from '../containers/PlayersList'
import GameStatus from '../containers/GameStatus'
import AddScoreList from '../containers/AddScoreList'

const App = () => (
  <div>
    <PlayersList />
    <GameStatus />
    <AddScoreList />
    {/* <Reset /> */}
  </div>
)

export default App
