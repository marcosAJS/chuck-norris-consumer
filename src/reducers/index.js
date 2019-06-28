import {combineReducers} from 'redux';

import jokes from './jokes';
import categories from './categories';
import system from './system';

export default combineReducers({ jokes, categories, system });
