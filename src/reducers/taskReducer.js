const todoempty = { todos: [] };
const taskReducer = (state = todoempty, action) => {
  switch (action.type) {
    case "addTodo":
      return { todos: [...state.todos, action.task] };
    case "removeTodo":
      return { todos: state.todos.filter((val, ind) => ind != action.task) };
    case "updateTodo":
      return {
        todos: state.todos.map((val, ind) =>
          ind == action.task.id ? action.task : val
        ),
      };
    case "multiRemove":
      return { todos: state.todos.filter((val, ind) => !action.task[ind]) };
    default:
      return state;
  }
};
export { taskReducer };
