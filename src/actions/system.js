import { OPEN_MODAL, CLOSE_MODAL, SET_KEY_TO_SORT } from "./constants";

export function openModal() {
  return {
    type: OPEN_MODAL
  };
}

export function closeModal() {
  return {
    type: CLOSE_MODAL
  };
}

export function setKeyToSort({ key, order }) {
	return {
		type: SET_KEY_TO_SORT,
		key,
		order
	};
}
