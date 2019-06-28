
import Api from '../api';
import { GET_ALL_CATEGORIES } from './constants';

export const getAllCategories = () => dispatch => {
  Api.getCategories().then(categories =>
    dispatch(getAllCategoriesSuccess(categories))
  );
};
 
const getAllCategoriesSuccess = categories => {
  return {
    type: GET_ALL_CATEGORIES,
    categories
  };
};
