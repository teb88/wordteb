import { actionUnsetNonVerifiedErr } from '@store/actions';
import { selectNonVerifiedErr } from '@store/selectors/error.selectors';
import { selectCurrentAttempt } from '@store/selectors/wordle.selectors';
import { connect } from 'react-redux';
import Row from './Row';

const mapStateToProps = (state) => {
  return {
    hasNonVerifiedErr: selectNonVerifiedErr(state),
    currentAttempt: selectCurrentAttempt(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    unsetNonVerifiedErr: () => dispatch(actionUnsetNonVerifiedErr()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Row);
