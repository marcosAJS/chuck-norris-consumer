
import { BASE_URL, HEADERS } from './constants';

export const getRandomJoke = () => {
  return fetch(`${BASE_URL}/random`, { headers: HEADERS }).then(res =>
    res.json()
  );
};

export const getRandomJokeByCategory = (category) => {
  return fetch(`${BASE_URL}/random?category=${category}`, { headers: HEADERS }).then(res =>
    res.json()
  );
};


