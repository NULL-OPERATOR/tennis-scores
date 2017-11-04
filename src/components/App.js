import React from 'react'
import PlayersList from '../containers/PlayersList'
import GameStatus from '../containers/GameStatus'
import AddScoreList from '../containers/AddScoreList'
import ResetContainer from '../containers/ResetContainer'

const App = () => (
  <div>
    <PlayersList />
    <GameStatus />
    <AddScoreList />
    <ResetContainer />
  </div>
)

export default App
