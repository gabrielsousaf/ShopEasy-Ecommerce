import "./Cart.css";
import { useCart } from "../../context/CartContext"

const Cart = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, removeAllFromCart, updateCartItemQuantity, calculateTotalPrice } = useCart();

  const handleIncreaseQuantity = (productId) => {
    updateCartItemQuantity(productId, 1); 
  };

  const handleDecreaseQuantity = (productId) => {
    updateCartItemQuantity(productId, -1); 
  };

  const handleRemoveAll = () => {
    removeAllFromCart();
  }

  const totalPrice = calculateTotalPrice();

  return (
    <div className={`cart-container ${isOpen ? "open" : ""}`}>
      <div className="cart-content">
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              <span>{product.name}</span>
              <span>R$ {product.price}</span>
              <span>Quantidade: {product.quantity}</span>
              <button onClick={() => handleDecreaseQuantity(product.id)}>-</button>

              <button onClick={() => handleIncreaseQuantity(product.id)}>+</button>
              <button onClick={() => removeFromCart(product.id)}>
                Remover
              </button>
            </li>
          ))}
        </ul>
        <button onClick={handleRemoveAll}>Remover Todos</button>
        <button onClick={onClose}>Fechar Carrinho</button>
        <div className="total-price">
          <strong>Preço Total: R$ {totalPrice.toFixed(2)}</strong>
        </div>
      </div>
    </div>
  );
};

export default Cart;
