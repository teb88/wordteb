import { requester } from '.';
import { PATHS } from './paths';

import type { Method } from '.';

export const verifyWordRequest = (word: string) => {
  const options = {
    path: PATHS.VERIFY_WORD,
    method: 'POST' as Method,
    body: word,
    headers: { 'Content-Type': 'text/plain' },
  };

  return requester(options);
};

export const verifyGameHashRequest = () => {
  const options = PATHS.GAME_HASH;

  return requester(options);
}
