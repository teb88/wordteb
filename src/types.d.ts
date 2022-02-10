export type Action<T = {}> = { payload: {} & T };
export type MatchType = 'none' | 'exists' | 'in-place';
export type LetterBlock = { matchType?: MatchType; letter: string };
