import { createStore, combineReducers } from 'redux';
import { formValues } from './reducers';

const reducers = {
	formValues,
};
const rootReducers = combineReducers(reducers);
export const configureStore = () => createStore(rootReducers);
