import React, { useState } from "react";
import axios from "axios";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setMessage(null);
  
    try {
      // Send login request with query parameters
      const response = await axios.get("https://localhost:7182/api/User/Login", {
        params: {
          email: username, // Map the input to 'email' as required by the backend
          password,
        },
      });
  
      // Handle the response if successful
      setMessage(response.data); // Show the welcome message from the backend
  
      // Redirect after login
      setTimeout(() => {
        window.location.href = "/dashboard"; // Adjust the URL as needed
      }, 2000);
    } catch (err) {
      console.error("Login error:", err.response || err);
      const errorMessage =
        err.response?.data?.title || "Login failed. Please check your credentials.";
      setError(errorMessage);
    }
  };
  
  
  

  return (
    <div>
      <h1>Welcome to the Login Page</h1>
      <h4>Please sign in underneath:</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Username">Username: </label>
        <input
          type="text"
          id="Username"
          name="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br />
        <label htmlFor="Password">Password:</label>
        <input
          type="password"
          id="Password"
          name="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />{" "}
        <br />
        <input type="submit" value="Submit" />
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {message && <p style={{ color: "green" }}>{message}</p>}
    </div>
  );
};

export default LoginPage;
