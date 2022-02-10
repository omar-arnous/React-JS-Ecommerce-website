import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Addproduct = (props) => {
  const { state } = useLocation();
  const product = state.product;
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getCategories = async () => {
      const categoryList = await fetchCategories();
      setCategories(categoryList);
    };
    getCategories();
  }, []);
  const fetchCategories = async () => {
    const res = await fetch(process.env.REACT_APP_API + "category");
    const data = await res.json();
    console.log(data);
    return data;
  };
  const navigate = useNavigate();
  var PhotoFileName = "profile.png";
  const [imagesrc, setImageSrc] = useState(
    process.env.REACT_APP_PHOTOPATH + PhotoFileName
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    AddProduct(event);
  };

  const AddProduct = async (event) => {
    const res = await fetch(process.env.REACT_APP_API + "product", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ProductID: product ? product.ProductID : "",
        BrandName: event.target.brandName.value,
        Model: event.target.model.value,
        Color: event.target.color.value,
        CategoryID: event.target.category.value,
        Specs: event.target.specs.value,
        Picture: event.target.picture.value,
        Price: event.target.price.value,
        Quantity: event.target.quantity.value,
      }),
    });
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
      <h3>Add Product</h3>
      <form onSubmit={handleSubmit} className="auth-form">
        <input
          type="text"
          name="brandName"
          placeholder="Brand Name .."
          value={product.BrandName}
          required
          autoFocus
        />
        <input
          type="text"
          name="model"
          placeholder="product Name .."
          value={product.Model}
          required
        />
        <input
          type="text"
          name="color"
          placeholder="product Color .."
          value={product.Color}
          required
        />
        <textarea
          type="text"
          name="specs"
          style={{ width: "500px", height: "200px" }}
          value={product.Specs}
        />
        <select
          id="category"
          name="category"
          style={{ width: "500px", height: "40px", margin: "20px 0" }}
          value={product.CategoryID}
        >
          {categories.map((category) => {
            return <option value={category.CategoryID}>{category.Name}</option>;
          })}
        </select>
        <div className="img-selector">
          <div className="img-data">
            <img
              width="200px"
              height="200px"
              src={imagesrc}
              alt="customer"
              value={product.Picture}
            />
          </div>
          <input onChange={handleFileSelected} type="File" name="picture" />
        </div>
        <input
          type="text"
          name="price"
          placeholder="product Price .."
          value={product.Price}
          required
        />
        <input
          type="text"
          name="quantity"
          placeholder="product Quantity .."
          value={product.Quantity}
          required
        />
        <input type="submit" value="Submit" className="submit-btn" />
      </form>
    </div>
  );
};

export default Addproduct;
