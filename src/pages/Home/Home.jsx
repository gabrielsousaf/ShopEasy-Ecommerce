import "./Home.css"

import { useState, useEffect } from "react"
import { Products } from "../../components/Products/Products"
import { fetchHome } from "../../services/api"

import { FaTruck, FaMotorcycle, FaRegCreditCard } from "react-icons/fa"

import BackMen from "../../assets/BackMen.jpg"
import BackWomen from "../../assets/BackWomen.jpg"
import BackElec from "../../assets/BackElec.jpg"
import BackJewelry from "../../assets/BackJewelry.jpg"

import { Link } from "react-router-dom"

const Home = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchHome().then((data) => {

      const productsWithRating = data.map((product) => ({
        ...product,
        rating: (Math.random() * (5 - 3) + 3).toFixed(1),
      }));

      setProducts(productsWithRating)
    })
  }, [])

  return(
    <main>
      <div className="container">

        <div className="container-image">
          <img src={BackMen} />
          <div className="text">
            <h1>Roupas Masculinas</h1>
            <Link to={`/products/men`}>ver produtos</Link>
          </div>
        </div>

        <div className="container-image">
          <img src={BackWomen} />
          <div className="text">
            <h1>Roupas Femininas</h1>
            <Link to={`/products/women`}>ver produtos</Link>
          </div>
        </div>

        <div className="container-image">
          <img src={BackElec} />
          <div className="text">
            <h1>Eletrônicos</h1>
            <Link to={`/products/electronics`}>ver produtos</Link>
          </div>
        </div>

        <div className="container-image">
          <img src={BackJewelry} />
          <div className="text">
            <h1>Joalheria</h1>
            <Link to={`/products/jewelery`}>ver produtos</Link>
          </div>
        </div>

      </div>

      <section className="container-info">
        <div>
          <FaTruck />
          <p>Frete Grátis <br/> acima de R$ 250</p>
        </div>
        <div>
          <FaMotorcycle />
          <p>Retirada <br/> disponivel</p>
        </div>
        <div>
          <FaRegCreditCard />
          <p>Pagamento facilitado</p>
        </div>
      </section>

      <section className="container-products">
        <div>
          <h1>Nossos principais produtos</h1>
          <div className="product">
            {products.length === 0 && <h1>Carregando...</h1>}
            {products.length > 0 &&
              products.map((product => 
                <Products key={product.id} product={product} />
              )) 
            }
          </div>
          <Link to={`/products`} className="LinkProducts">ver todos os produtos</Link>
        </div>
      </section>
    </main>
  )
}

export default Home;