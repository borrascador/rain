import { createStore } from 'redux';
import reducer from './reducers/index.js';

export default function configureStore () {
	return createStore(reducer);
}
