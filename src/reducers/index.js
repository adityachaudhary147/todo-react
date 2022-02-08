import { taskReducer } from "./taskReducer";
import { tokenReducer } from "./tokenReducer";
import { combineReducers } from "redux";

const mainobj = { taskReducer, tokenReducer };
const rootReducer = combineReducers(mainobj);
const appReducer = (state, action) => {
  if (action.type == "LOGOUT")
    return { taskReducer: { todos: [] }, tokenReducer: { token: "" } };
  return rootReducer(state, action);
};

export { rootReducer, appReducer };
