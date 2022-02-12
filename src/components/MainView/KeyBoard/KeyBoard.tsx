import React from 'react';
import keys from './keys';
import usePhysicalKeyboard from './usePhysicalKeyboard';

import type { MatchType } from 'src/types';
import Key from './Key';

interface KeyboardProps {
  onKeyPress(str: string): void;
  onPressEnter(): void;
  onPressBackspace(): void;
  discoveredLetters: Record<string, MatchType>;
}



const KeyBoard: React.FC<KeyboardProps> = ({
  onKeyPress,
  onPressEnter,
  onPressBackspace,
  discoveredLetters,
}) => {
  usePhysicalKeyboard({
    onKeyPress,
    onPressEnter,
    onPressBackspace,
  });

  const getKeyRow = ({ type, value, Component }) => {
    switch (type) {
      case 'letters':
        return value.split('').map((key: string, i: number) => (
          <Key
            key={key + i} 
            letter={key}
            matchType={discoveredLetters[key]}
            onClick={() => onKeyPress(key)} />
        ));
      case 'key':
        const callback = value === 'Enter' ? onPressEnter : onPressBackspace;
        return (
          <Key key={value} onClick={callback} letter={Component ? <Component /> : value} />
        );
    }
  };

  return (
    <div className="w-full">
      {keys.map((keyRow, i) => {
        return (
          <div key={i} className="flex justify-between">
            {keyRow.map(getKeyRow)}
          </div>
        );
      })}
    </div>
  );
};

export default KeyBoard;
