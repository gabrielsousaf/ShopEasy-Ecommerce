import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const calculateTotalQuantity = () => {
    return cart.reduce((total, product) => total + product.quantity, 0)
  }

  const [totalQuantity, setTotalQuantity] = useState(calculateTotalQuantity());

  useEffect(() => {
    setTotalQuantity(calculateTotalQuantity());
  }, [cart])

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeFromCart = (productId) => {
    // Implemente a lógica para remover produtos do carrinho
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cart, totalQuantity, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
