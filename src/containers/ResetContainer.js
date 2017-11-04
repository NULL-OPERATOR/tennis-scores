import { connect } from 'react-redux'
import { resetGame } from '../actions'
import Reset from '../components/Reset'


const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
  onResetClick: resetGame
}

const ResetContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Reset)

export default ResetContainer
