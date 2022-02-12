import { useEffect } from 'react';

const usePhysicalKeyboard = ({
  onKeyPress,
  onPressEnter,
  onPressBackspace,
}) => {
  useEffect(() => {
    function handleKeyPress(ev: KeyboardEvent) {
      if (!ev.isTrusted || !ev.key.match(new RegExp('[A-Z]{1}', 'ig'))) {
        return;
      }

      onKeyPress(ev.key.toUpperCase());
    }

    function handleKeyDown(ev: KeyboardEvent) {
      if (!ev.isTrusted) {
        return;
      }

      switch (ev.key) {
        case 'Enter':
          onPressEnter();
          break;
        case 'Backspace':
          onPressBackspace();
        default:
          break;
      }
    }

    document.addEventListener('keypress', handleKeyPress);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keypress', handleKeyPress);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onKeyPress, onPressBackspace, onPressEnter]);
};

export default usePhysicalKeyboard;
