import { combineReducers } from "redux";
import todos from "./todo";
import visibilityFilter from "./visibilityFilter";

const todoApp = combineReducers({
  visibilityFilter,
  todos
});

export default todoApp;
