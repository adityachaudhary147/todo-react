import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../css/login.css";
import { addToken } from "../actions/actions";

export default function Login() {
  const token = useSelector((state) => state);
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState("");
  const navigate = useNavigate();
  let CheckStatus = token.tokenReducer.token ? true : false;
  React.useEffect(() => (CheckStatus ? navigate("/") : false));
  function handleEvent(e) {
    setEmail(e.target.value);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    function emailValidation() {
      if (email) return true;
      else {
        alert("please enter valid email");
        return false;
      }
    }
    if (emailValidation()) {
      console.log("start axiox call");
      const res = await axios(
        "https://run.mocky.io/v3/afa1b987-0835-4ee1-9375-6f57caa5c609"
      ).catch((err) => console("Error in getting the token", err));
      if (res) {
        navigate("/");
        dispatch(addToken(res.data.token));
      }
    }
    return;
  }
  return (
    <>
      {!CheckStatus && (
        <div className="container">
          <div className="login">
            <form onSubmit={handleSubmit}>
              <h1>To Do App</h1>
              <h2>Login </h2>
              <div className="grid">
                <div className="grid-item">
                  <input
                    type="email"
                    placeholder="email..."
                    name={email}
                    onChange={handleEvent}
                    required
                  />
                </div>

                <div className="grid-item">
                  <input
                    required
                    minLength={6}
                    placeholder="password"
                    type="password"
                    name="password"
                  />
                </div>
                <div></div>
                <div>
                  <button type="submit" className="btn-login">
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
