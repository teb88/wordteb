import React from 'react';
import { LetterBlock } from 'src/types';

const matchTypeClasses = {
  none: 'bg-letter-none text-gray-800 border-none',
  exists: 'bg-letter-exists border-none',
  'in-place': 'bg-letter-in-place text-white border-none',
};

const LetterBlock: React.FC<LetterBlock> = ({ matchType, letter }) => {
  const matchTypeClx = matchTypeClasses[matchType] || 'border-gray-400 ';
  return <div className={`letter-block ${matchTypeClx}`}>{letter}</div>;
};

export default LetterBlock;
