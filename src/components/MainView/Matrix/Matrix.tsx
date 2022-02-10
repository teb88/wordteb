import React from 'react';
import { useSelector } from 'react-redux';
import { selectMatrix } from '@store/selectors/wordle.selectors';
import { LetterBlock } from 'src/types';
import Row from './Row/Row';

interface MatrixProps {
  className?: string;
}

const Matrix: React.FC<MatrixProps> = ({ className }) => {
  const matrix: Array<Array<LetterBlock>> = useSelector(selectMatrix);
  const clx = `w-full ${className}`;

  return (
    <div className={clx}>
      {matrix?.map((row, i) => (
        <Row key={i} rowData={row} />
      ))}
    </div>
  );
};

export default Matrix;
