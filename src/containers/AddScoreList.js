import React from 'react'
import { connect } from 'react-redux'
import { increaseScore } from '../actions'
import AddScore from '../components/AddScore'

const AddScoreList = ({ players, winner, onScoreClick }) => (
  <div>
    {players.map(player =>
      <AddScore
        key={player.id}
        winner={winner}
        playerName={player.name}
        onClick={() => onScoreClick(player.id)} />
    )}
  </div>
)

const mapStateToProps = (state) => ({
  players: state.game.players,
  winner: state.game.winner,
})

const mapDispatchToProps = {
  onScoreClick: increaseScore
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddScoreList)
