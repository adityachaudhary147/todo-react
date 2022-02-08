let tokenState = {
  token: "",
};
const tokenReducer = (state = tokenState, action) => {
  switch (action.type) {
    case "add": {
      return { token: action.token };
    }
    case "remove": {
      return { token: "" };
    }
    default:
      return state;
  }
};
export { tokenReducer };
