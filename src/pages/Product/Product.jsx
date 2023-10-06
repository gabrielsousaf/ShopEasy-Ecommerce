import "./Product.css";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../../services/api";

import { useCart } from "../../context/CartContext";

import { FaShoppingCart } from "react-icons/fa"

const Product = () => {
  const { addToCart } = useCart();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetchProduct(id)
      .then((data) => {
        setProduct({
          ...data,
          image: data.image,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = () => {
    const productToAdd ={
      id: product.id,
      title: product.title,
      price: product.price,
      quantity:quantity,
      image: product.image,
    }

    addToCart(productToAdd);
  }

  return (
    <div className="ContainerProduct">
      <div className="product-image">
        <img src={product.image} />
      </div>
      <div className="product-info">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <strong>R$ {product.price}</strong>

        <div className="QuantityButton">
          <div className="quantity-product">
            <button
              type="button" 
              onClick={() => {
                if(quantity > 1) { 
                  setQuantity(quantity - 1)
                } 
              }}
            >
              -
            </button>
            <input type="text" value={quantity} />
            <button type="button" onClick={() => setQuantity(quantity + 1) }>+</button>
          </div>

          <button className="Button" onClick={handleAddToCart}>
            <FaShoppingCart />
            <span>
              Adicionar no carrinho           
            </span> 
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
