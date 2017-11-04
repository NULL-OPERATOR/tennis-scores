import React from 'react'
import PropTypes from 'prop-types'

const Reset = ({ onResetClick }) => (
  <button onClick={onResetClick}>
    Reset Game
  </button>
)

Reset.propTypes = {
  onResetClick: PropTypes.func.isRequired,
}

export default Reset
