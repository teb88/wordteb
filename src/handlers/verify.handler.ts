import { getWinnerWord } from './utils';
import dict from '../assets/dict';

export const handleVerifyWord = (word: string) => {
  if (word.length < 5 || !dict.includes(word.toLowerCase())) {
    return false;
  }

  const winnerWord = getWinnerWord();

  if (word.toLowerCase() === winnerWord) {
    return word.split('').map((letter) => ({ letter, matchType: 'in-place' }));
  }

  const getMatchType = (index: number) => {
    if (word[index].toLowerCase() === winnerWord[index].toLowerCase()) {
      return 'in-place';
    }

    return winnerWord.includes(word[index].toLowerCase()) ? 'exists' : 'none';
  };

  return word.split('').map((letter, i) => ({
    letter,
    matchType: getMatchType(i),
  }));
};
