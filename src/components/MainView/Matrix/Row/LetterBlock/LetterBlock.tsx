import React from 'react';
import { LetterBlock } from 'src/types';

const matchTypeClasses = {
  none: '',
  exists: 'bg-orange-400',
  'in-place': 'bg-blue-600 text-white',
};

const LetterBlock: React.FC<LetterBlock> = ({ matchType, letter }) => {
  const matchTypeClx = matchTypeClasses[matchType] || '';
  return (
    <div
      className={`text-2xl w-12 h-12 sm:w-16 sm:h-16 m-1 sm:m-2 flex items-center justify-center border-2 border-gray-400 rounded-sm ${matchTypeClx}`}
    >
      {letter}
    </div>
  );
};

export default LetterBlock;
