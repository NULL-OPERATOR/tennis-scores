import React from 'react'
import PropTypes from 'prop-types'

const AddScore = ({ playerName, winner, onClick }) => {
  if (winner === '') {
    return (
      <button onClick={onClick}>{playerName} scored</button>
    )
  }
  return (
    <button disabled>{playerName} scored</button>
  )
}

AddScore.propTypes = {
  winner: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default AddScore
