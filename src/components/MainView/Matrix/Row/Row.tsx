import React, { useEffect, useState } from 'react';
import LetterBlock from './LetterBlock/LetterBlock';
import type { LetterBlock as LetterBlockType } from 'src/types';
import { motion } from 'framer-motion';
import { MAX_CHAR_PER_WORD } from 'src/configs';
import { blockScale, rowShake } from './row.animations';

interface RowProps {
  currentAttempt: number;
  rowNumber: number;
  rowData: Array<LetterBlockType>;
  hasNonVerifiedErr: null | true;
  unsetNonVerifiedErr(): void;
}

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

  const getCanAnimate = (index: number) => {
    return index === rowData.length - 1
      ? 'animation' 
      : 'initial';
  }

  return (
    <motion.div
      variants={rowShake}
      initial="initial"
      animate={animation}
      onAnimationComplete={handleAnimationEnded}
      className="w-min flex justify-between max-w-md mx-auto"
    >
      {filledRow.map((letter, i) => (
        <motion.div 
          key={i} 
          initial="initial" 
          animate={getCanAnimate(i)} 
          variants={blockScale} 
        >
          <LetterBlock  {...letter} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Row;
