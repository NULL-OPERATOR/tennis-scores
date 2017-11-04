import React from 'react'
import { connect } from 'react-redux'
import Player from '../components/Player'

const PlayersList = ({ players }) => (
  <div>
    {players.map(player =>
      <Player
        key={player.id}
        {...player}
      />
    )}
  </div>
)

const mapStateToProps = (state) => ({
  players: state.game.players
})

export default connect(
  mapStateToProps,
)(PlayersList)
