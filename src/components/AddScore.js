import React from 'react'
import PropTypes from 'prop-types'

const AddScore = ({playerName, winner, onClick}) => {
  const disabled = winner !== ''
  return (
    <button onClick={onClick} disabled={disabled}>
      {playerName}
      scored
    </button>
  )
}

AddScore.propTypes = {
  winner: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default AddScore
