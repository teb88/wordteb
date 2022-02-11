import React from 'react';

import KeyBoard from './KeyBoard';
import Matrix from './Matrix';
import TopBar from './TopBar';

interface MainViewProps {
  onVerifyWord(): void;
  onAddLetter(letter: string): void;
  onRemoveLetter(): void;
}

const MainView: React.FC<MainViewProps> = ({ 
  onAddLetter, 
  onRemoveLetter, 
  onVerifyWord 
}) => {
  return (
    <div className="max-w-lg mx-auto h-full flex flex-col justify-between">
      <TopBar logo={(
        <span className="text-3xl p-2">
          WordTeb
        </span>
      )} />
      <Matrix className="mb-4" />
      <KeyBoard
        onPressEnter={onVerifyWord}
        onPressBackspace={onRemoveLetter}
        onKeyPress={(letter) => onAddLetter(letter)}
      />
    </div>
  );
};

export default MainView;
