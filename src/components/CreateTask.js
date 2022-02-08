import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addTodo } from "../actions/actions";
import { today } from "../date";
import NavBar from "./NavBar";
export default function CreateTask() {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    title: "",
    description: "",
    DueDate: "",
    priority: "Medium",
  });
  const navigate = useNavigate();
  const token = useSelector((state) => state.tokenReducer.token);
  const CheckStatus = token ? true : false;
  useEffect(() => (CheckStatus ? true : navigate("/login")));
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addTodo(state));
    setState({ title: "", description: "", DueDate: "", priority: "" });
    alert("Task Created Successfully");
    navigate("/");
  }
  function handleallevents(e) {
    let { value, name } = e.target;
    if (!name) name = "priority";
    return setState((prev) => {
      if (name != "DueDate") value = value.replace(/[^\w\s]/gi, "");
      return { ...prev, [name]: value };
    });
  }
  return (
    <>
      <NavBar msg="Create Page" />
      <div className="container">
        <div>
          <h2>CreateTask</h2>
          <div className="form-create">
            <form onSubmit={handleSubmit}>
              <ul>
                <li>
                  <label>
                    Enter Title <span className="redstar">*</span>
                  </label>

                  <input
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
                  <label>
                    Due Date <span className="redstar">*</span>
                  </label>

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
                  <label>
                    Priority <span className="redstar">*</span>
                  </label>

                  <select value={state.priority} onChange={handleallevents}>
                    <option value="High">High</option>
                    <option value="Medium" defaultValue>
                      Medium
                    </option>
                    <option vlaue="Low">Low</option>
                  </select>
                </li>
                <li>
                  <button className="btn btn-primary" type="submit">
                    {" "}
                    submit
                  </button>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
