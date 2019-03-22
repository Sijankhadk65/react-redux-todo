import { createStore } from "redux";
import todoApp from "./reducers";
import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  VisibilityFilters
} from "./actions";

const store = createStore(todoApp);
