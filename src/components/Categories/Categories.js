import React, { useState, useEffect } from "react";
import Categoryitem from "./CategoryItem";

import "./Categories.css";

const Categories = () => {
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
    return data;
  };

  return (
    <section className="categories-section">
      <h1>Categories</h1>
      <ul className="category-list">
        {categories.length > 0 &&
          categories.map((category) => (
            <Categoryitem Categoryitem={category} />
          ))}
      </ul>
    </section>
  );
};

export default Categories;
