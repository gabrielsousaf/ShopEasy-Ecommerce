import "./Cart.css";
import { useCart } from "../../context/CartContext"
import PropTypes from 'prop-types';
import { FaTimes } from "react-icons/fa"
import CartItem from "../Cart-Item/Cart-item";

const Cart = ({ isOpen, onClose }) => {
  const { cart,  removeAllFromCart, calculateTotalPrice } = useCart();

  const handleRemoveAll = () => {
    removeAllFromCart();
  }

  const totalPrice = calculateTotalPrice();
  const installment = totalPrice ? (totalPrice / 10).toFixed(2) : (0).toFixed(2);
  return (
    <>
  <div className={`cart-overlay ${isOpen ? 'open' : ''}`} onClick={onClose} />
  <div className={`cart-container ${isOpen ? "open" : ""}`}>
        <div className="cart-content">
          <div className="cart-content-title">
            <h2>Carrinho</h2>
            <button aria-label="Fechar carrinho" onClick={onClose} style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}>
              <FaTimes />
            </button>
          </div>

          <ul>
            {cart.map((product) => (
              <CartItem key={product.id} product={{ ...product, title: product.title, image: product.image}} />
            ))}
          </ul>


          <div className="cart-actions">
            <div className="total-price">
              <h2>Preço Total: </h2>
              <div className="price">
                <h2>R$ {totalPrice.toFixed(2)}</h2>
                <p>Ou 10x de R$ {installment}</p>
              </div>
            </div>

            <div className="actions-row">
              <button className="btn btn--ghost" onClick={handleRemoveAll} aria-label="Limpar carrinho">Limpar carrinho</button>
              <button className="btn btn--primary" onClick={() => {}} aria-label="Finalizar compra">Finalizar compra</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;

Cart.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};
