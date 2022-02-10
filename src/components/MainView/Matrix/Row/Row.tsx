import React from 'react';
import LetterBlock from './LetterBlock/LetterBlock';
import type { LetterBlock as LetterBlockType } from 'src/types';
import { MAX_CHAR_PER_WORD } from 'src/configs';

interface RowProps {
  rowData: Array<LetterBlockType>;
}

const Row: React.FC<RowProps> = ({ rowData }) => {
  const filledRow = [
    ...rowData,
    ...Array(MAX_CHAR_PER_WORD - rowData.length).fill({ letter: '' }),
  ];

  return (
    <div className="w-min flex justify-between max-w-md mx-auto">
      {filledRow.map((letter, i) => (
        <LetterBlock key={i} {...letter} />
      ))}
    </div>
  );
};

export default Row;
