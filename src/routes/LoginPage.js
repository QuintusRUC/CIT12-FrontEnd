import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome to the Login Page</h1>
      <h4>Please sign in underneath:</h4>
      <form>
        <label htmlFor="Username">Username: </label>
        <input type="text" id="Username" name="Username" />
        <br />
        <label htmlFor="Password">Password:</label>
        <input type="password" id="Password" name="Password" /> <br />
        <input type="submit" value="Submit" />
        <br />
        <button onClick={() => navigate("/test")}>Test </button>
      </form>
    </div>
  );
};

export default LoginPage;
