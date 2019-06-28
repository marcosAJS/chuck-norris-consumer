import Api from "../api";
import { ADD_JOKE } from "./constants";

export const addJokeByCategory = category => dispatch => {
  Api.getRandomJokeByCategory(category).then(joke => dispatch(addJoke(joke)));
};

const addJoke = joke => {
  return {
    type: ADD_JOKE,
    joke
  };
};
