import "../../Store/Store.css"

import { useState, useEffect } from "react";

import { fetchCategoryJewelery } from "../../../services/api";
import { Products } from "../../../components/Products/Products";

const ProductsMen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchCategoryJewelery()
      .then((data) => {
        console.log("Data From API:", data);
        const productsWithRating = data.map((product) => ({
          ...product,
          rating: (Math.random() * (5 - 3) + 3).toFixed(1), // Gera um número entre 1 e 5
        }));
        console.log("Products:", productsWithRating);
        setProducts(productsWithRating);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
      <section className="container-products">
        <div>
          <h1>Joalheria</h1>
          <div className="product">
            {products.length === 0 && <h1>Carregando...</h1>} 
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

export default ProductsMen;
