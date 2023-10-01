import "./Navbar.css"

import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom"
import { useAuthentication } from "../../hooks/UseAuthentication";
import { useAuthValue } from "../../context/AuthContext";
import Cart from "../Cart/Cart"

import { FaSearch, FaShoppingCart, FaAlignJustify } from "react-icons/fa";

import { ToastContainer } from "react-toastify";

const Navbar = () => {

  const { login, createUser } = useAuthentication();
  const { logout } = useAuthentication();
  const { user } = useAuthValue();

  const [search, setSearch] = useState("")
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const handleScrollClose = () => {
      if (showMenu) {
        setShowMenu(false);
      }
    }
    window.addEventListener('scroll', handleScrollClose);

    return () => {
      window.removeEventListener('scroll', handleScrollClose);
    }
  }, [showMenu])

  const handleMenuToggle = () => {
    setShowMenu((prevState) => !prevState)
  }

  const handleSearchToggle = () => {
    setShowSearch((prevState) => !prevState)
  
  }

  const handleMenuCardOpen = () => {
    const containerHeader2 = document.getElementById("container-header2");
    containerHeader2.classList.remove("show");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    navigate(`/search?q=${search}`, { replace: true});
    setSearch("");
  }

  const handleCartToogle = () => {
    setIsCartOpen(!isCartOpen)
  }


  return (
    <header className="sticky">

      <div className="container-header-1">
        <div className="LogoForm">
          <NavLink to="/">
            <h1>ShopEasy</h1>
          </NavLink>

          <div className={`search-container ${showSearch ? "activeSearch" : ""}`}>
            <form className="search-form" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Buscar produtos"
                id="search-box" 
                onChange={(e) => setSearch(e.target.value)}
                value={search}
              />
              <button> <FaSearch /> </button>
            </form>
          </div>
        </div>

        <div className="LoginCart">

          <NavLink className="search" onClick={handleSearchToggle}>
            <FaSearch/>
          </NavLink>

          {user && (
            <p id="RegisterAndLogin" className="RegisterLogin" onClick={logout}>Sair</p>
          )}

          {!user && (
            <>
              <NavLink to={`/register`} id="RegisterAndLogin" className={({ isActive }) => (isActive ? "RegisterLogin" : "")}>
                <p>
                  Register
                </p>
              </NavLink>

              <NavLink to={`/login`} id="RegisterAndLogin" className={({ isActive }) => (isActive ? "RegisterLogin" : "")}>
                <p>
                  Login
                </p>
              </NavLink>
            </>
          )}

          <NavLink className="cart" onClick={handleCartToogle}>
            <FaShoppingCart />
            <span>2</span>
          </NavLink>

          <button className="hamburguer d-none" onClick={handleMenuToggle}>
            <FaAlignJustify className={`hamburguer-line ${showMenu ? "active" : ""}`} />
          </button>
        </div>

        <Cart isOpen={isCartOpen} onClose={handleCartToogle} />
      </div>



      <div id="container-header2" className={showMenu ? 'show' : ''} onClick={handleMenuCardOpen}>
        {user && (
          <p className="RegisterLogin" onClick={logout}>Sair</p>
        )}

        {!user && (
          <>
            <NavLink to={`/register`} id="RegisterAndLogin" className={({ isActive }) => (isActive ? "RegisterLogin" : "")}>
              <p>
                Register
              </p>
            </NavLink>

            <NavLink  to={`/login`} id="RegisterAndLogin" className={({ isActive }) => (isActive ? "RegisterLogin" : "")}> 
              <p>
                Login
              </p>
            </NavLink>
          </>
        )}

        <nav className="navbar">
          <NavLink to={`/products`}>
            Loja
          </NavLink>
          
          <NavLink to={`/products/men`}>
            Roupas Masculinas
          </NavLink>
            
          <NavLink to={`/products/women`} >
            Roupas Femininas
          </NavLink>
           
          <NavLink to={`/products/electronics`}>
            Eletrônicos
          </NavLink>
            
          <NavLink to={`/products/jewelery`}>
            Joalheria
          </NavLink>
        </nav>
      </div> 

      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </header>
  );
}  

export default Navbar;