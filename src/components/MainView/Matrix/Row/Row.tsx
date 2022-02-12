import React, { useEffect, useState } from 'react';
import LetterBlock from './LetterBlock/LetterBlock';
import type { LetterBlock as LetterBlockType } from 'src/types';
import { motion } from 'framer-motion';
import { MAX_CHAR_PER_WORD } from 'src/configs';

interface RowProps {
  currentAttempt: number;
  rowNumber: number;
  rowData: Array<LetterBlockType>;
  hasNonVerifiedErr: null | true;
  unsetNonVerifiedErr(): void;
}

const rowShake = {
  initial: {
    x: 0,
  },
  animation: {
    x: [null, -30, 30, -30, 0],
    transition: {
      duration: 0.6,
    },
  },
};

const Row: React.FC<RowProps> = ({
  rowData,
  hasNonVerifiedErr,
  unsetNonVerifiedErr,
  currentAttempt,
  rowNumber,
}) => {
  const [animation, setAnimation] = useState<string>('initial');

  const filledRow = [
    ...rowData,
    ...Array(MAX_CHAR_PER_WORD - rowData.length).fill({ letter: '' }),
  ];

  useEffect(() => {    
    if (currentAttempt === rowNumber && hasNonVerifiedErr) {
      setAnimation('animation');
    }
  }, [hasNonVerifiedErr, currentAttempt, rowNumber]);
  
  const handleAnimationEnded = () => {
    setAnimation('initial');
    unsetNonVerifiedErr();
  };

  return (
    <motion.div
      variants={rowShake}
      initial="initial"
      animate={animation}
      onAnimationComplete={handleAnimationEnded}
      className="w-min flex justify-between max-w-md mx-auto"
    >
      {filledRow.map((letter, i) => (
        <LetterBlock key={i} {...letter} />
      ))}
    </motion.div>
  );
};

export default Row;
