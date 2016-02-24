import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import someReducer from './reducers/someReducer';

const rootReducer = combineReducers({
  someReducer,
});

export default function configureStore(initialState) {
	return createStore(rootReducer, initialState);
}
