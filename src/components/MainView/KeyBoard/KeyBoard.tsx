import React from 'react';
import keys from './keys';
import usePhysicalKeyboard from './usePhysicalKeyboard';

interface KeyboardProps {
  onKeyPress(str: string): void;
  onPressEnter(): void;
  onPressBackspace(): void;
}

const KeyBoard: React.FC<KeyboardProps> = ({
  onKeyPress,
  onPressEnter,
  onPressBackspace,
}) => {
  
  usePhysicalKeyboard({
    onKeyPress,
    onPressEnter,
    onPressBackspace
  })

  const keyClasses =
    'm-0.5 sm:m-1 h-14 flex-grow rounded bg-gray-400 hover:bg-blue-400 transition-colors duration-300';

  const getKeyRow = ({ type, value }) => {
    switch (type) {
      case 'letters':
        return value.split('').map((key: string, i: number) => (
          <button
            key={key + i}
            className={keyClasses}
            onClick={() => onKeyPress(key.toUpperCase())}
          >
            {key}
          </button>
        ));
      case 'key':
        const callback = value === 'Enter' ? onPressEnter : onPressBackspace;
        return (
          <button key={value} className={keyClasses} onClick={callback}>
            {value}
          </button>
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
