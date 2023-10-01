import "../Store/Store.css";

import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchSearch } from "../../services/api";
import { Products } from "../../components/Products/Products";

const Search = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();


  useEffect(() => {
    const query = searchParams.get("q");
    setSearchQuery(query || "");
  }, [searchParams]);

  useEffect(() => {
    if (searchQuery.trim() !== "") {
      setLoading(true);
      handleSearch(searchQuery);
    } else {
      setProducts([]);
    }
  }, [searchQuery]);

  

  const handleSearch = async (query) => {
    const allProducts = await fetchSearch();
    const filteredProducts = allProducts.filter((product) => 
      product.title.toLowerCase().includes(query.toLowerCase())
    )
    
    setProducts(filteredProducts)
    setLoading(false);
  }

  return (
    <div>
      <section className="container-products">
        <div>
          <div className="product">
            {loading ? (
              products.length === 0 && <h1>Carregando...</h1>
            ) : (
              products.length > 0 &&
                products.map((product) => (
                  <Products key={product.id} product={product} />
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Search;
