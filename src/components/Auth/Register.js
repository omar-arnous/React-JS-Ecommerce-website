import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./auth.css";

const Register = () => {
  const navigate = useNavigate();
  var PhotoFileName = "profile.png";
  const [imagesrc, setImageSrc] = useState(
    process.env.REACT_APP_PHOTOPATH + PhotoFileName
  );

  const handleRegister = (event) => {
    event.preventDefault();
    Register(event);
  };

  const Register = async (event) => {
    console.log("payment", event.target.Payments.value);
    const res = await fetch(process.env.REACT_APP_API + "customer", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        CustomerID: "",
        Name: event.target.CustomerName.value,
        Email: event.target.CustomerEmail.value,
        Password: event.target.CustomerPassword.value,
        Phone: event.target.CustomerPhone.value,
        Address: event.target.CustomerAddress.value,
        Picture: event.target.Picture.value,
        Payment: event.target.Payments.value,
      }),
    });
    const userID = await res.json();
    if (userID.status === false) {
      alert(userID.message);
    } else {
      localStorage.setItem("id", userID);
      navigate("/");
      window.location.reload(false);
    }
  };

  const handleFileSelected = (event) => {
    event.preventDefault();

    PhotoFileName = event.target.files[0].name;
    const formData = new FormData();
    formData.append(
      "myFile",
      event.target.files[0],
      event.target.files[0].name
    );

    fetch(process.env.REACT_APP_API + "EcommerceStore/SaveFile", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        setImageSrc(process.env.REACT_APP_PHOTOPATH + result);
      });
  };
  return (
    <div className="auth-section">
      <h3>Register</h3>
      <form onSubmit={handleRegister} className="auth-form">
        <input
          type="text"
          name="CustomerName"
          placeholder="User Name .."
          required
          autoFocus
        />
        <input
          type="email"
          name="CustomerEmail"
          placeholder="Email..."
          required
        />
        <input
          type="password"
          name="CustomerPassword"
          placeholder="Password .."
          required
        />
        <input
          type="text"
          name="CustomerPhone"
          placeholder="Address .."
          required
        />
        <input
          type="text"
          name="CustomerAddress"
          placeholder="Phone .."
          required
        />
        <label for="Payments">Choose a payment method:</label>

        <select name="Payments" id="Payments" className="select">
          <option value="1">PayPal</option>
          <option value="2">Visa Card</option>
          <option value="3">Master Card</option>
          <option value="4">Cash</option>
        </select>
        <div className="img-selector">
          <div className="img-data">
            <img width="200px" height="200px" src={imagesrc} alt="customer" />
          </div>
          <input onChange={handleFileSelected} type="File" name="Picture" />
        </div>
        <input type="submit" value="Submit" className="submit-btn" />
      </form>
    </div>
  );
};

export default Register;
