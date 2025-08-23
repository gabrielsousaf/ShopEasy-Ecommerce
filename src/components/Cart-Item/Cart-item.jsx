import { useCart } from "../../context/CartContext";
import { FaTrash } from "react-icons/fa";
import PropTypes from "prop-types";

import { toast } from "react-toastify";


const CartItem = ({ product }) => {
  const { removeFromCart, updateCartItemQuantity } = useCart();

  const id = product?.id;

  const handleIncreaseQuantity = () => {
    if (id) updateCartItemQuantity(id, 1);
  };

  const handleDecreaseQuantity = () => {
    if (id) updateCartItemQuantity(id, -1);
  };

  const handleRemove = () => {
    toast.warning("Produto removido do carrinho!");
    if (id) removeFromCart(id);
  };

  const priceNumber = Number(product?.price) || 0;
  const formattedPrice = (Math.round(priceNumber * 100) / 100).toFixed(2);

  return (
    <li>
      <div className="Container">
        <img src={product?.image || '/icon.png'} alt={product?.title || 'produto'} />
        <div className="NameQuantity">
          <h2 className="Name">{product?.title}</h2>
          <div className="Quantity">
            <button onClick={handleDecreaseQuantity}>-</button>
            <span>{product?.quantity || 0}</span>
            <button onClick={handleIncreaseQuantity}>+</button>
          </div>
        </div>
      </div>


      <div className="PriceTrash">
        <div className="Price">
          <span>R$ {formattedPrice}</span>
        </div>
        <div className="Trash">
          <button aria-label="Remover do carrinho" onClick={handleRemove} style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}>
            <FaTrash />
          </button>
        </div>
      </div>
    </li>
  );
};

CartItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    quantity: PropTypes.number,
    image: PropTypes.string,
  }).isRequired,
};

export default CartItem;
