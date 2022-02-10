import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartProvider from "./context/CartProvider";

import Header from "./components/Layout/Header/Header";
import Cart from "./components/cart/Cart";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Main from "./components/main/main";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import AdminNav from "./components/Admin/AdminNav";
import Admin from "./components/Admin/Admin";
import Adminpage from "./components/Admin/AdminPage";
import Categories from "./components/Categories/Categories";
import Footer from "./components/Layout/Footer/Footer";
import Viewcustomers from "./components/Admin/ViewCustomers";
import Addproduct from "./components/products/AddProduct";
import Addcategory from "./components/Categories/AddCategory";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const isLogin = localStorage.getItem("id");
  const isAdmin = localStorage.getItem("Admin");

  const showCartHandler = () => {
    console.log("Cart Clicked");
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      <Router>
        {cartIsShown && isLogin && <Cart onClose={hideCartHandler} />}
        {!isAdmin ? <Header onShowCart={showCartHandler} /> : <AdminNav />}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin-page" element={<Adminpage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/details" element={<ProductDetail />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/customers" element={<Viewcustomers />} />
          <Route path="/add-product" element={<Addproduct />} />
          <Route path="/add-category" element={<Addcategory />} />
        </Routes>
      </Router>
      <Footer />
    </CartProvider>
  );
}

export default App;
