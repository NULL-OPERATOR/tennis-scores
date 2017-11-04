import React from 'react'
import { connect } from 'react-redux'
import { increaseScore } from '../actions'
import AddScore from '../components/AddScore'


const AddScoreList = ({ players, active, increaseScore }) => (
  <div>
    {players.map(player =>
      <AddScore
        key={player.id}
        active={active}
        onClick={() => increaseScore(player.id)} />
    )}
  </div>
)

const mapStateToProps = (state) => ({
  players: state.game.players,
  active: state.game.winner,
})


export default connect(
  mapStateToProps,
  { increaseScore }
)(AddScoreList)
