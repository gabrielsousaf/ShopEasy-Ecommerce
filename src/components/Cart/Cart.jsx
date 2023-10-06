import "./Cart.css";
import { useCart } from "../../context/CartContext"
import { FaTimes } from "react-icons/fa"
import CartItem from "../Cart-Item/Cart-item";

const Cart = ({ isOpen, onClose }) => {
  const { cart,  removeAllFromCart, updateCartItemQuantity, calculateTotalPrice } = useCart();

  const handleRemoveAll = () => {
    removeAllFromCart();
  }

  const totalPrice = calculateTotalPrice();

  return (
    <div className={`cart-container ${isOpen ? "open" : ""}`}>
      <div className="cart-content">
        <div className="cart-content-title">
          <h2>Carrinho</h2>
          <FaTimes onClick={onClose}/> 
        </div>
        <ul>
          {cart.map((product) => (
            <CartItem key={product.id} product={{ ...product, title: product.title, image: product.image}} />
          ))}
        </ul>


        <div className="total-price">
          <strong>Preço Total: R$ {totalPrice.toFixed(2)}</strong>
        </div>
      </div>
    </div>
  );
};

export default Cart;
