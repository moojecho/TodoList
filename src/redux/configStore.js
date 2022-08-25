import {createStore, combineReducers} from "redux";
import todo from "./modules/todo.js";
import after from "./modules/after"
import detail from "./modules/detail"

const rootReducer = combineReducers({todo,after,detail});

const store = createStore(rootReducer);

export default store;