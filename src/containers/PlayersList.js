import { connect } from 'react-redux'
import Players from '../components/Players'


const mapStateToProps = (state) => ({
  players: state.game.players
})

const PlayersList = connect(
  mapStateToProps,
)(Players)

export default PlayersList
