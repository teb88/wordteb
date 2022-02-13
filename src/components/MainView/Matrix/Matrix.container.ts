import { selectMatrix } from '@store/selectors/wordle.selectors';
import { connect } from 'react-redux';
import Matrix from './Matrix';

const mapStateToProps = (state) => {
  return {
    matrix: selectMatrix(state),
  };
};

export default connect(mapStateToProps)(Matrix);
