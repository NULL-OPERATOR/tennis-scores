import React from 'react'
import PropTypes from 'prop-types'

const AddScore = ({ active, onClick }) => {
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

AddScore.propTypes = {
  active: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default AddScore
