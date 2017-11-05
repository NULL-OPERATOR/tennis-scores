import { connect } from 'react-redux'
import Status from '../components/Status'

const mapStateToProps = (state) => ({
  winner: state.game.winner
})

const GameStatus = connect(
  mapStateToProps,
)(Status)

export default GameStatus
