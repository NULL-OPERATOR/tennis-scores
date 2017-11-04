import { connect } from 'react-redux'
import Players from '../components/Players'


const mapStateToProps = (state) => ({
  players: state.players
})

// const mapDispatchToProps = {
// }

const PlayersList = connect(
  mapStateToProps,
  // mapDispatchToProps
)(Players)

export default PlayersList
