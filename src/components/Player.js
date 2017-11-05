import React from 'react'
import PropTypes from 'prop-types'

const Player = ({ scoreText, name }) => (
  <div className="player">
    <p>{name}</p>
    <h2>{scoreText}</h2>
  </div>
)

Player.propTypes = {
  scoreText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default Player
