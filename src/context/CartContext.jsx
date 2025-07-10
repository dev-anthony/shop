// src/context/CartContext.jsx
import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    // Get cart from localStorage on first load
    const saved = localStorage.getItem("my-cart");
    return saved ? JSON.parse(saved) : [];
  });

  // Save to localStorage every time cart changes
  useEffect(() => {
    localStorage.setItem("my-cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(product) {
    const exists = cart.find(item => item.id === product.id);
    if (exists) return;
   setCart([...cart, { ...product, quantity: 1 }]);
  }

  function removeFromCart(id) {
    setCart(cart.filter(item => item.id !== id));
  }
//   function updateQuantity(id) {
    
//     setCart(cart.map(item =>
//       item.id === id ? { ...item, quantity: setCount(Number(count++)) } : item
//     ));
//   }

  function updateQuantity(id, qty) {
    setCart(cart.map(item =>
      item.id === id ? { ...item, quantity: Number(qty) } : item
    ));
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
