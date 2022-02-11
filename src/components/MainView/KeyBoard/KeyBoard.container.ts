import { selectDiscoveredLetters } from '@store/selectors/wordle.selectors';
import { connect } from 'react-redux';
import KeyBoard from './KeyBoard';

import type { RootState } from '@store/index';

const mapStateToProps = (state: RootState) => {
  return {
    discoveredLetters: selectDiscoveredLetters(state),
  };
};

export default connect(mapStateToProps)(KeyBoard);
