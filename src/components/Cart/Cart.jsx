import "./Cart.css";
import { useCart } from "../../context/CartContext"

const Cart = ({ isOpen, onClose }) => {
  const { cart, removeFromCart } = useCart();
  return (
    <div className={`cart-container ${isOpen ? "open" : ""}`}>
      <div className="cart-content">
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            <span>{product.name}</span>
            <span>R$ {product.price}</span>
            <span>Quantidade: {product.quantity}</span>
            <button onClick={() => removeFromCart(product.id)}>
              Remover
            </button>
          </li>
        ))}
      </ul>
        <button onClick={onClose}>Fechar Carrinho</button>
      </div>
    </div>
  );
};

export default Cart;
