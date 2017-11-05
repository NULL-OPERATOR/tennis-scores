import React from 'react'
import PropTypes from 'prop-types'

const Status = ({ winner }) => {
  const message = winner ? winner + ' won!' : ''
  return <h1 className="status">{message}</h1>
}

Status.propTypes = {
  winner: PropTypes.string.isRequired,
}

export default Status
