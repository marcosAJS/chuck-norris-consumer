import { ADD_JOKE } from "../actions/constants";

export default function jokes(state = [], action = {}) {
  switch (action.type) {
    case ADD_JOKE:
      const {joke} = action;
      return (state.find(j => j.id === joke.id)) ? state : [...state, joke]
    default:
      return state;
  }
}
