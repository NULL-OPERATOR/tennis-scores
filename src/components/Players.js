import React from 'react'
import PropTypes from 'prop-types'
import Player from './Player'

const Players = ({ players }) => (
  <div>
    {players.map(player =>
      <Player
        key={player.id}
        {...player}
      />
    )}
  </div>
)

Players.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    score: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired)
}

export default Players
