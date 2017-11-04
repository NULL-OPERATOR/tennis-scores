import React from 'react'
import { connect } from 'react-redux'
import { increaseScore } from '../actions'
import AddScore from '../components/AddScore'


const AddScoreList = ({ players, winner, increaseScore }) => (
  <div>
    {players.map(player =>
      <AddScore
        key={player.id}
        winner={winner}
        onClick={() => increaseScore(player.id)} />
    )}
  </div>
)

const mapStateToProps = (state) => ({
  players: state.game.players,
  winner: state.game.winner,
})

export default connect(
  mapStateToProps,
  { increaseScore }
)(AddScoreList)
