import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
function NavBar(props) {
  const dispatch = useDispatch();

  return (
    <div className="head-nav">
      <div className="nav">
        <div className="grid-nav">
          <div className="head-item">
            <h2>
              <Link to="/">Todo App</Link>{" "}
            </h2>
          </div>
          <div>
            <h2>{props.msg}</h2>
          </div>
          <div></div>
          <div className="head-item">
            <Link to="/create">
              <h2>Create Task</h2>
            </Link>
          </div>
          <div className="head-item">
            <button
              className="logout-btn"
              onClick={() => {
                dispatch({ type: "LOGOUT" });
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
