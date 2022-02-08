import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "../css/home.css";
export default function Page404() {
  const navigate = useNavigate();
  const token = useSelector((state) => state.tokenReducer.token);
  let CheckStatus = token ? true : false;
  React.useEffect(() => (CheckStatus ? true : navigate("/login")));

  return (
    <div>
      <h2>
        You are Lost in the space Click
        <Link to="/" className="lost">
          Here
        </Link>
        to go home
      </h2>
    </div>
  );
}
