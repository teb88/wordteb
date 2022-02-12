import React from 'react';
import { LetterBlock } from 'src/types';
import Row from './Row';

interface MatrixProps {
  matrix: Array<Array<LetterBlock>>;  
  className?: string;
}

const Matrix: React.FC<MatrixProps> = ({
  matrix,
  className,
}) => {
  const clx = `w-full ${className}`;

  return (
    <div className={clx}>
      {matrix?.map((row, i) => (
        <Row
          key={i}
          rowData={row}
          rowNumber={i}
        />
      ))}
    </div>
  );
};

export default Matrix;
