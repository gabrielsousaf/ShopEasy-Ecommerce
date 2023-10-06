import { useCart } from "../../context/CartContext";
import { FaTrash } from "react-icons/fa"


const CartItem = ({ product }) => {
  console.log("Product in CartItem:", product);
  const { removeFromCart, updateCartItemQuantity } = useCart();

  const handleIncreaseQuantity = () => { 
    updateCartItemQuantity(product.id, 1);
  };

  const handleDecreaseQuantity = () => {
    updateCartItemQuantity(product.id, -1);
  };

  const handleRemove = () => {
    removeFromCart(product.id);
  };

  const formattedPrice = (Math.round(product.price * 100) / 100).toFixed(2);

  return (
    <li key={product.id}>
      <div className="Container">
        <img src={product.image} alt={product.title} />
        <div className="NameQuantity">
          <h2 className="Name">{product.title}</h2>
          <div className="Quantity">
            <button onClick={handleDecreaseQuantity}>-</button>
            <span>{product.quantity}</span>
            <button onClick={handleIncreaseQuantity}>+</button>
          </div>
        </div>
      </div>


      <div className="PriceTrash">
        <div className="Price">
          <span>R$ {formattedPrice}</span>
        </div>
        <div className="Trash">
          <FaTrash onClick={handleRemove} />
        </div>
      </div>
    </li>
  );
};

export default CartItem;
