export type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

export type ReqOptions =
  | string
  | {
      path: string;
      method?: Method;
      headers?: Record<string, string>;
      body?: string;
    };

const getOptions = (opts: ReqOptions) => {
  if (typeof opts === 'string') {
    return { url: opts };
  }
  const { path, ...restOpts } = opts;

  return { url: path, ...restOpts };
};

export const requester = async (opts: ReqOptions) => {
  try {
    const { url, ...options } = getOptions(opts);

    const response = await fetch(url, options as RequestInit);
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response.json();
  } catch (error) {
    return error;
  }
};

export * from './requests';
