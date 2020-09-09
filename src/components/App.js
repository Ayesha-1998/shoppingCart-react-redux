import React from "react";
import Products from "./Products";
import "bootstrap/dist/css/bootstrap.css";
import Cart from "./Cart";
const App = () => {
  return (
    <div>
      <Cart />
      <Products />
    </div>
  );
};

export default App;
