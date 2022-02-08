import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { removeTodo, multiRemove } from "../actions/actions";
import "../css/home.css";
import { today } from "../date";
import NavBar from "./NavBar";
export default function Home() {
  const navigate = useNavigate();
  const token = useSelector((state) => state.tokenReducer.token);
  const todos = useSelector((state) => state.taskReducer.todos);
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(
    new Array(todos.length).fill(false)
  );
  const CheckStatus = token ? true : false;
  useEffect(() => (CheckStatus ? true : navigate("/login")));
  function handleDelete(id) {
    dispatch(removeTodo(id));
    const updatedState = isChecked.filter((item, index) => !index == id);
    setIsChecked(updatedState);
  }
  function handlemultiple() {
    dispatch(multiRemove(isChecked));
    const updatedState = new Array(todos.length).fill(false);
    setIsChecked(updatedState);
  }
  function handlecheck(e) {
    const updatedState = isChecked.map((item, index) =>
      index == Number(e.target.value) ? !item : item
    );
    setIsChecked(updatedState);
  }
  function checkmulti() {
    let gh = false;
    isChecked.map((val) => {
      if (val) gh = true;
      return val;
    });
    return gh;
  }
  function handlecolor(date) {
    if (date < today) return "past";
    if (date == today) return "today";
    return;
  }
  function handleop(isChecked, ind) {
    if (isChecked[ind]) return "checked";
    return;
  }
  return (
    <div>
      <NavBar msg="Home Page Todo List" />
      <div className="del">
        <div className="head-item">
          {checkmulti() && (
            <button
              className="multi-delete-btn"
              onClick={() => handlemultiple()}
            >
              {" "}
              Delete Selected
            </button>
          )}
        </div>
      </div>

      <div className="taskList container">
        {!todos.length && (
          <div className="flex">
            <div>
              <h2 className="inline">Create Your First Task 👉</h2>{" "}
              <Link to="/create"> Here </Link>
            </div>
          </div>
        )}

        {todos.map(({ title, description, priority, DueDate }, ind) => (
          <div
            id={ind}
            key={ind}
            className={`task ${handlecolor(DueDate)} ${handleop(
              isChecked,
              ind
            )}`}
          >
            <div className="task-item title">
              <h1>{title}</h1>
            </div>
            <div className="flex">
              <div>
                <input
                  type="checkbox"
                  name={ind}
                  value={ind}
                  checked={isChecked[ind]}
                  onChange={handlecheck}
                />
              </div>
              <div className="task-item">
                <Link to={`update/${ind + 1}`}>
                  <button className="edit-btn">Edit ✍🏻</button>
                </Link>
              </div>
              <div className="task-item">
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(ind)}
                >
                  {" "}
                  Delete 🚮
                </button>
              </div>
            </div>
            <div className="task-item">
              <span>Priority : {priority}</span>
            </div>
            <div className="task-item">
              <span>Due on - {DueDate}</span>
            </div>
            <div className="para">
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
