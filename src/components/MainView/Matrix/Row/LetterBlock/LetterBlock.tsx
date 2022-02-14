import React from 'react';
import { LetterBlock as LetterBlockType } from 'src/types';

const matchTypeClasses = {
  none: 'bg-letter-none text-gray-800 border-none',
  exists: 'bg-letter-exists border-none',
  'in-place': 'bg-letter-in-place rounded-lg border-letter-in-place animate-pulse text-white scale-110',
};

const LetterBlock: React.FC<LetterBlockType> = ({ matchType, letter }) => {
  const matchTypeClx = matchTypeClasses[matchType] || 'border-gray-400 ';
  return <div className={`letter-block ${matchTypeClx}`}>{letter}</div>;
};

export default LetterBlock;
