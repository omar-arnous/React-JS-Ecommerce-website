import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(process.env.REACT_APP_API + "Login_admin", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Name: event.target.CustomerName.value,
        Password: event.target.CustomerPass.value,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        localStorage.setItem("Admin", result);
        window.location.reload(false);
        navigate("/admin-page");
      })
      .catch((err) => alert(err));
  };

  return (
    <div className="auth-section">
      <h3>Admin Login</h3>
      <form onSubmit={handleSubmit} className="auth-form">
        <input
          type="text"
          name="CustomerName"
          placeholder="User Name .."
          required
          autoFocus
        />
        <input
          type="password"
          name="CustomerPass"
          placeholder="Password .."
          required
        />
        <input type="submit" value="Submit" className="submit-btn" />
      </form>
    </div>
  );
};

export default Admin;
