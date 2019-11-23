import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers';

const logMiddleware = () => (next) => (action) => {
	console.log(action.type)
	return next(action);
}

const stringMiddleware = state => next => action => {
	if (typeof action === 'string') {
		return next({type: action})
	}
	return next(action);
}

const store = createStore(
		reducer, 
		applyMiddleware(thunkMiddleware, stringMiddleware, logMiddleware)
	);

store.dispatch('Hi there!');

export default store; 

