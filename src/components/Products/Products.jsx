import "./Products.css";

import { FaStar, FaExpandAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const Products = ({ product }) => {
  const randomRating = (Math.random() * ( 5 - 3 ) + 3).toFixed(1);
  
  const renderStars = () => {
    const stars = [];
    const totalStars = 5;

    for (let i = 1; i <= totalStars; i++) {
      if (i <= randomRating) {
        stars.push(<FaStar key={i} className="full" />);
      } else {
        stars.push(<FaStar key={i} className="empty" />);
      }
    }
    return stars;
  }  

  return (
    <div className="container-product">
      <img
        src={product.image || '/icon.png'}
        alt={product.title || 'product image'}
        loading="lazy"
        onError={(e) => { if (e?.target) e.target.src = '/icon.png'; }}
      />
      <div className="product-info">
        <h2>{product.title}</h2>
        <strong>R$ {product.price}</strong>

        <div className="rating">
          <div className="RateButton">
            {renderStars()}
            <span>{randomRating}</span>
            <Link to={`/products/${product.id}`}>
              <FaExpandAlt /> Ver
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Products.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    title: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    image: PropTypes.string,
  }).isRequired,
};
