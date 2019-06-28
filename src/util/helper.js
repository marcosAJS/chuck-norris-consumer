import sortBy from 'sort-by';
import { sortOrder } from './constants';

export function parseToQueryString(obj) {
	if (typeof obj !== 'object' || obj === null) return '';

	return '?'.concat(
		Object.keys(obj)
			.map(key => `${key}=${obj[key]}`)
			.join('&')
	);
}

export function sortByKey(list, key, order = sortOrder.ASC) {
	return list.sort(sortBy(order === 'asc' ? key : `-${key}`));
}
