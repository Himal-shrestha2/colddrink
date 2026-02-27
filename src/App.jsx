import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";

function App() {

  const [cart, setCart] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
// adding items to the cart
  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);

      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };
// increasing and decreasing the quantity of items in the cart
const increaseQuantity = (id) => {
  setCart(prevCart =>
    prevCart.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  );
};

const decreaseQuantity = (id) => {
  setCart(prevCart =>
    prevCart
      .map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter(item => item.quantity > 0)
  );
};
// removing items from the cart
  const removeFromCart = (id) => {
    setCart(prevCart =>
      prevCart.filter(item => item.id !== id)
    );
  };

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white min-h-screen" : "min-h-screen"}> 
    
      <Navbar 
      cart={cart}
      darkMode={darkMode}
      setDarkMode={setDarkMode}
       />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              cart={cart}
              handleAdd={addToCart}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              removeFromCart={removeFromCart}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
            />
          }
        />
      </Routes>
      {showToast && (
  <div className="fixed top-5 right-5 bg-green-500 text-white px-6 py-3 rounded shadow-lg transition">
    Item added to cart ✓
  </div>
)}
</div>
    

  );
}

export default App;