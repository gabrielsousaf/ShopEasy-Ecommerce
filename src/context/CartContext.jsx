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

  const updateLocalStorage = (updatedCart) => {
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };


  const calculateTotalQuantity = () => {
    return cart.reduce((total, product) => total + product.quantity, 0);
  };

  useEffect(() => {
    setTotalQuantity(calculateTotalQuantity());
    updateLocalStorage(cart);
  }, [cart]);

  const [totalQuantity, setTotalQuantity] = useState(calculateTotalQuantity());



  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex(
      (item) => item.id === product.id
    );
    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += product.quantity;
      setCart(updatedCart);
    } else {
      const updatedCart = [...cart, { ...product, title: product.title, image: product.image}];
      setCart(updatedCart);
    }
  };



  const updateCartItemQuantity = (productId, quantityChange) => {
    const updatedCart = cart.map((item) => {
      if (item.id === productId) {
        if (item.quantity + quantityChange < 1) {
          return null;
        }
        return {
          ...item,
          quantity: item.quantity + quantityChange,
        };
      }
      return item;
    });

    const filteredCart = updatedCart.filter((item) => item !== null);

    setCart(filteredCart);
  };


  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
  };

  const calculateTotalPrice = () => {
    return cart.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  };

  const removeAllFromCart = () => {
    setCart([]);
  };


  return (
    <CartContext.Provider
      value={{
        cart,
        totalQuantity,
        updateCartItemQuantity,
        addToCart,
        removeFromCart,
        removeAllFromCart,
        calculateTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
