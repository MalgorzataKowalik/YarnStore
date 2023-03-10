import React, { useState } from "react";
import Items from "./components/Items/Items";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartOpen, setCartOpen] = useState(false)

  const openCartHandler = () => {
    setCartOpen(true)
}

const closeCartHandler = () => {
    setCartOpen(false)
}

  return (
    <CartProvider>
      {cartOpen && <Cart onCloseCart={closeCartHandler}/>}
      <Header onOpenCart={openCartHandler}></Header>
      <main>
        <Items/>
      </main>
    </CartProvider>
  );
}

export default App;
