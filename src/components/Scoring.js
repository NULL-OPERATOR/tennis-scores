import React from 'react'
import PropTypes from 'prop-types'

const Status = ({ active, onClick }) => {
  console.log(active, onClick)

  if (active) {
    return (
      <button onClick={onClick}>score</button>
    )
  }
  return (
    <button disabled>score</button>
  )
}

Status.propTypes = {
  active: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Status
