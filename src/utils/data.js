import { pipe } from './fn';

const request = async (url) => {
  const res = await fetch(url);
  return res.json();
};

export const getData = async (url, mapper) => await pipe(request, mapper)(url);
