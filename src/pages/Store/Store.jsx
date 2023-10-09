import "./Store.css"

import { useState, useEffect } from "react";
import { Products } from "../../components/Products/Products"
import { fetchStore } from "../../services/api"

const Store = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchStore().then((data) => {

      const productsWithRating = data.map((product) => ({
        ...product,
        rating: (Math.random() * (5 - 3) + 3).toFixed(1), // Gera um número entre 1 e 5
      }));

      setProducts(productsWithRating)
    })
  }, [])

  return (
    <div className="container">
      <section className="container-products">
        <div>
          <h1>Nossos principais produtos</h1>
          <div className="product">
            {products.length > 0 &&
              products.map((product) => (
                <Products key={product.id} product={product} />
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Store;
