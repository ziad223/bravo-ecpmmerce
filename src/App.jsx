import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/navbar/Navbar";
import SingleFake from "./components/Fake/SingleFake";
import SingleJummy from "./components/jummy/SingleJummy";
import Footer from "./components/footer/Footer";
import { useState } from "react";
import Cart from "./components/cart/Cart";
import Swal from "sweetalert2";


const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [dark , setDark] = useState(false);

  function isDark(){
    setDark(!dark);
  }


  function addProducts(item) {
    const selectedProduct = cartItems.find((pro) => pro.id == item.id);

    if (selectedProduct) {
      Swal.fire({
        icon: "warning",
        title: "This Product exist added in cart",
        showConfirmButton: false,
        timer: 2000,
      });
    } else {
      setCartItems([...cartItems, item]);
      Swal.fire({
        icon: "success",
        title: "The product added in the cart successfully",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  }

  function deleteProduct(product) {
    setCartItems(cartItems.filter((item) => item.id != product.id));
    Swal.fire({
      icon: "success",
      title: "The product is Removed From cart ",
      showConfirmButton: false,
      timer: 2000,
    });
  }

  return (
   <div className={dark ? 'app-dark' : 'dark'}>
     <BrowserRouter>
      <Navbar cartItems={cartItems} dark = {dark} setDark = {setDark} isDark = {isDark}  />
      <Routes>
        <Route path="/" element={<HomePage addProducts={addProducts} />} />
        <Route path="/singleFake/:id" element={<SingleFake addProducts = {addProducts} />} />
        <Route path="/singleJummy/:id" element={<SingleJummy addProducts = {addProducts} />} />
        <Route
          path="/cart"
          element={<Cart cartItems={cartItems} deleteProduct={deleteProduct} />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
   </div>
  );
};

export default App;
