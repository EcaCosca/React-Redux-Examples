import { createStore, combineReducers } from "redux";
// import reducers
import counter from "./counter/counter";
import todos from "./todos/todos";
import user from './user/user';

const reducers = combineReducers({ counter, todos, user });
const store = createStore(reducers);

export default store;
