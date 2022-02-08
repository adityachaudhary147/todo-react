export function addTodo(task) {
  return {
    type: "addTodo",
    task: task,
  };
}
export function updateTodo(task) {
  return {
    type: "updateTodo",
    task: task,
  };
}
export function multiRemove(task) {
  return {
    type: "multiRemove",
    task: task,
  };
}
export function removeTodo(task) {
  return {
    type: "removeTodo",
    task: task,
  };
}
export function addToken(token) {
  return {
    type: "add",
    token: token,
  };
}
export function removeToken() {
  return {
    type: "remove",
    token: "",
  };
}
