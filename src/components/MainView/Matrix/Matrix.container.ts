import { actionUnsetNonVerifiedErr } from '@store/actions';
import { selectNonVerifiedErr } from '@store/selectors/error.selectors';
import { selectCurrentAttempt, selectMatrix } from '@store/selectors/wordle.selectors';
import { connect } from 'react-redux';
import Matrix from './Matrix';

const mapStateToProps = (state) => {
  return {
    hasNonVerifiedErr: selectNonVerifiedErr(state),
    matrix: selectMatrix(state),
    currentAttempt: selectCurrentAttempt(state),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    unsetNonVerifiedErr: () => dispatch(actionUnsetNonVerifiedErr())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Matrix);
