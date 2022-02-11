import React from 'react';
import { useDispatch } from 'react-redux';
import {
  actionAddLetter,
  actionRemoveLetter,
  actionVerifyWord_start,
} from '@store/actions';
import KeyBoard from './KeyBoard';
import Matrix from './Matrix';
import TopBar from './TopBar';

const MainView = () => {
  const dispatch = useDispatch();

  const handleVerifyWord = () => {
    dispatch(actionVerifyWord_start());
  };

  const handleAddLetter = (str: string) => {
    dispatch(actionAddLetter(str));
  };

  const handleRemoveLetter = () => {
    dispatch(actionRemoveLetter());
  };

  return (
    <div className="max-w-lg mx-auto h-full flex flex-col justify-between">
      <TopBar logo={(
        <span className="text-3xl p-2">
          WordTeb
        </span>
      )} />
      <Matrix className="mb-4" />
      <KeyBoard
        onPressEnter={handleVerifyWord}
        onPressBackspace={handleRemoveLetter}
        onKeyPress={handleAddLetter}
      />
    </div>
  );
};

export default MainView;
