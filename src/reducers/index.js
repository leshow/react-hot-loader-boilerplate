import { combineReducers } from 'redux';
import fuelSavingsAppState from './fuelSavings';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  fuelSavingsAppState,
  routing: routerReducer
});

export default rootReducer;
