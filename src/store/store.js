import { createStore } from 'redux';
import reducer from './reducers';

const store = createStore(reducer);

console.log("This is the store --> ", store.getState());

export default store;