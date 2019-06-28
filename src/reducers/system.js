import { sortOrder } from "../util/constants";
import { SET_KEY_TO_SORT, CLOSE_MODAL, OPEN_MODAL } from "../actions/constants";

const initialStatus = {
  sortBy: {
    key: "id",
    order: sortOrder.DESC
  },
  modal: {
    open: false
  }
};

export default function system(state = initialStatus, action = {}) {
  switch (action.type) {
    case OPEN_MODAL:
      return { ...state, modal: { open: true } };
    case CLOSE_MODAL:
      return { ...state, modal: { open: false } };
    case SET_KEY_TO_SORT:
      const { key, order } = action;
      return { ...state, sortBy: { key, order } };
    default:
      return state;
  }
}
