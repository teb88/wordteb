import React from 'react';
import type { MatchType } from 'src/types';

interface KeyProps {
  matchType?: MatchType;
  letter: string;
  onClick(): void;
}

const getMatchClasses = (matchType?: MatchType) => {
  switch (matchType) {
    case 'none':
      return 'bg-letter-none';
    case 'exists':
      return 'bg-letter-exists';
    case 'in-place':
      return 'bg-letter-in-place';
    default:
      return 'bg-gray-400';
  }
};

const Key: React.FC<KeyProps> = ({ matchType, letter, onClick }) => {
  const keyClasses =
    'm-0.5 sm:m-1 h-14 flex-grow rounded hover:bg-blue-400 transition-colors duration-300';
  return (
    <button
      onClick={onClick}
      className={`${keyClasses} ${getMatchClasses(matchType)}`}
    >
      {letter}
    </button>
  );
};

export default Key;
