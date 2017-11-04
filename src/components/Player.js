import React from 'react'
import PropTypes from 'prop-types'

const Player = ({ score, name }) => (
  <div>
    hello -
    {name} -
    {score}
  </div>
)

Player.propTypes = {
  score: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
}

export default Player
