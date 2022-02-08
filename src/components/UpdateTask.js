import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateTodo } from "../actions/actions";
import { today } from "../date";
import NavBar from "./NavBar";

export default function UpdateTask() {
  const dispatch = useDispatch();
  const param = useParams();
  const navigate = useNavigate();
  const products = useSelector((state) => state.taskReducer.todos);
  const [state, setState] = useState(products[param.taskId - 1]);
  const token = useSelector((state) => state.tokenReducer.token);
  const CheckStatus = token ? true : false;
  useEffect(() => {
    if (CheckStatus === false) {
      navigate("/login");
    }
  });
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(updateTodo({ ...state, id: param.taskId - 1 }));
    alert("Task Update Successfully ");
    navigate("/");
  }
  function handleallevents(e) {
    let { value, name } = e.target;
    return setState((prev) => {
      if (name != "DueDate") value = value.replace(/[^\w\s]/gi, "");
      return { ...prev, [name]: value };
    });
  }
  return (
    <>
      <NavBar msg="Edit Page" />
      {CheckStatus && (
        <div className="container">
          <div className="fixwid">
            <h2>Update Task</h2>
            <div className="form-create">
              <form onSubmit={handleSubmit}>
                <ul>
                  <li>
                    <label>Enter Title </label>

                    <input
                      disabled
                      type="text"
                      maxLength={20}
                      required
                      name="title"
                      value={state.title}
                      onChange={handleallevents}
                    />
                  </li>
                  <li>
                    <label>Description </label>

                    <input
                      type="text"
                      maxLength={100}
                      name="description"
                      value={state.description}
                      onChange={handleallevents}
                    />
                  </li>
                  <li>
                    <label>Due Date </label>

                    <input
                      required
                      type="date"
                      id="date_picker"
                      min={today}
                      name="DueDate"
                      value={state.DueDate}
                      onChange={handleallevents}
                    />
                  </li>
                  <li>
                    <label>Priority </label>

                    <select
                      disabled
                      value={state.priority}
                      onChange={handleallevents}
                    >
                      <option value="High">High</option>
                      <option value="Medium" defaultValue>
                        Medium
                      </option>
                      <option vlaue="Low">Low</option>
                    </select>
                  </li>
                  <li>
                    <button className="btn" type="submit">
                      {" "}
                      submit
                    </button>
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
