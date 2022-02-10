export const createAction =
  (type: string, ...str: Array<string>) =>
  (...values: Array<unknown>) => {
    const action = { type, payload: {} };
    str.reduce((acc, field, i) => {
      acc[field] = values[i];

      return acc;
    }, action.payload);

    return action;
  };
