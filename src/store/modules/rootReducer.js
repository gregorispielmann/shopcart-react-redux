import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import cart from './cart/reducer';

const reducers = combineReducers({
  cart,
  form: formReducer,
});

export default reducers;
