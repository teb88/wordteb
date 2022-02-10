import React from 'react';
import { useDispatch } from 'react-redux';
import {
  actionAddLetter,
  actionRemoveLetter,
  actionVerifyWord_start,
} from '../../store/actions';
import KeyBoard from './KeyBoard';
import Matrix from './Matrix';

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
    <div className="max-w-lg mx-auto border border-red-600 h-full flex flex-col justify-between">
      <div>Title yay</div>
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
