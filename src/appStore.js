import { combineReducers, createStore, applyMiddleware } from "redux";
import { rulesReducer } from "./reducers/rules.reducer";
import thunkMiddleware from "redux-thunk";

const appReducer = combineReducers({
  rules: rulesReducer,
});

const store = createStore(appReducer, applyMiddleware(thunkMiddleware));

export default store;
