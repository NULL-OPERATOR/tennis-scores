import React from 'react'
import PropTypes from 'prop-types'

const AddScore = ({playerName, winner, onScoreClick}) => {
  const disabled = winner !== ''
  return (
    <button onClick={onClick} disabled={disabled}>
      {playerName} scored
    </button>
  )
}

AddScore.propTypes = {
  playerName: PropTypes.string.isRequired,
  winner: PropTypes.string.isRequired,
  onScoreClick: PropTypes.func.isRequired
}

export default AddScore
