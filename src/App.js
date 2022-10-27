import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import About from './Pages/About';



function App() {
  const [cart, setCart] = useState([]);
  console.log(cart);
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home cart={cart} setCart={setCart} />}></Route>

        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />}></Route>

        <Route path="/cart" element={<About cart={cart} setCart={setCart} />}></Route>

      </Routes>

    </React.Fragment>
  );
}

export default App;
