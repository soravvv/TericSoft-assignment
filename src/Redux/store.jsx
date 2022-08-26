import { reducer } from "./reducer";
import {combineReducers, legacy_createStore} from "redux";

const rootReducer = combineReducers({
    data: reducer,
});

const store = legacy_createStore(rootReducer);

console.log(store.getState());

export default store;