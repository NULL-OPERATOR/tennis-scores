import React from 'react'
import { connect } from 'react-redux'
import Player from '../components/Player'

const PlayersList = ({ players }) => (
  <div className="player-list">
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
