import "./Cart.css";

const Cart = ({ isOpen, onClose }) => {
  return (
    <div className={`cart-container ${isOpen ? "open" : ""}`}>
      <div className="cart-content">
        <button onClick={onClose}>Fechar Carrinho</button>
      </div>
    </div>
  );
};

export default Cart;
