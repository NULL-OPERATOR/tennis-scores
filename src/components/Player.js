import React from 'react'
import PropTypes from 'prop-types'

const Player = ({ scoreText, name }) => (
  <div>
    {name} - {scoreText}
  </div>
)

Player.propTypes = {
  scoreText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default Player
