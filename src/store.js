import { createStore } from "redux";
import { loadState, saveState } from "./localstorage";
import { appReducer } from "./reducers/index";

const persistedState = loadState();
const store = createStore(
  appReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
//After every action this saveState will be called for sure in any circumstances
store.subscribe(() => {
  saveState(store.getState());
});
export default store; // console.log(store.getState());
