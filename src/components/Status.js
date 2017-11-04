import React from 'react'
import PropTypes from 'prop-types'

const Status = ({ winner }) => {
  console.log(winner)
  if (winner) {
    return (
      <h1>{winner}</h1>
    )
  }
  return null
}

Status.propTypes = {
  winner: PropTypes.string.isRequired,
}

export default Status
