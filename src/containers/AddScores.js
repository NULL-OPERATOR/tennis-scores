import { connect } from 'react-redux'
import { increaseScore } from '../actions'
import Scoring from '../components/Scoring'

const mapStateToProps = (state) => ({
  active: state.game.winner
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: (id) => {
    dispatch(increaseScore(id))
  }
})

const AddScores = connect(
  mapStateToProps,
  mapDispatchToProps
)(Scoring)

export default AddScores
