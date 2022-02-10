import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Addcategory = () => {
  const navigate = useNavigate();
  var PhotoFileName = "profile.png";
  const [imagesrc, setImageSrc] = useState(
    process.env.REACT_APP_PHOTOPATH + PhotoFileName
  );
  const handleSubmit = (event) => {
    event.preventDefault();
    AddCategory(event);
  };

  const AddCategory = async (event) => {
    event.preventDefault();
    const res = await fetch(process.env.REACT_APP_API + "category", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Name: event.target.CategoryName.value,
        Picture: event.target.picture.value,
      }),
    });
    const data = await res.json();
    navigate("/admin-page");
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
      <h3>Add Category</h3>
      <form onSubmit={handleSubmit} className="auth-form">
        <input
          type="text"
          name="CategoryName"
          placeholder="Category Name .."
          required
          autoFocus
        />
        <div className="img-selector">
          <div className="img-data">
            <img width="200px" height="200px" src={imagesrc} alt="customer" />
          </div>
          <input onChange={handleFileSelected} type="File" name="picture" />
        </div>
        <input type="submit" value="Submit" className="submit-btn" />
      </form>
    </div>
  );
};

export default Addcategory;
