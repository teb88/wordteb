import React from 'react';
import { useSelector } from 'react-redux';
import { selectMatrix } from '@store/selectors/wordle.selectors';
import { LetterBlock } from 'src/types';
import Row from './Row/Row';

interface MatrixProps {
  matrix: Array<Array<LetterBlock>>;
  currentAttempt: number;
  className?: string;
  hasNonVerifiedErr: null | true;
  unsetNonVerifiedErr(): void;
}

const Matrix: React.FC<MatrixProps> = ({
  matrix,
  className,
  hasNonVerifiedErr,
  unsetNonVerifiedErr,
  currentAttempt,
}) => {
  const clx = `w-full ${className}`;

  return (
    <div className={clx}>
      {matrix?.map((row, i) => (
        <Row
          key={i}
          rowData={row}
          hasNonVerifiedErr={i === currentAttempt && hasNonVerifiedErr ? true : null}
          unsetNonVerifiedErr={unsetNonVerifiedErr}
        />
      ))}
    </div>
  );
};

export default Matrix;
