import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import {
  actionAddLetter,
  actionRemoveLetter,
  actionVerifyWord_start,
} from '@store/actions';

import MainView from './MainView';

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onVerifyWord: () => dispatch(actionVerifyWord_start()),
    onAddLetter: (letter: string) => dispatch(actionAddLetter(letter)),
    onRemoveLetter: () => dispatch(actionRemoveLetter()),
  };
};

export default connect(null, mapDispatchToProps)(MainView);
