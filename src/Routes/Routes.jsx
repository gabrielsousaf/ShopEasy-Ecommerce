import App from "../App";

import { Navigate, Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

import { useState, useEffect } from "react";
import { useAuthentication } from "../hooks/UseAuthentication";

import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Store from "../pages/Store/Store";
import Search from "../pages/Search/Search";
import Product from "../pages/Product/Product";
import ProductsMen from "../pages/Category/Men/ProductsMen";
import ProductsWomen from "../pages/Category/Women/ProductsWomen";
import ProductsElectronics from "../pages/Category/Electronics/ProductsElectronics";
import ProductsJewelery from "../pages/Category/Jewelery/ProductsJewelery";


import { AuthProvider } from "../context/AuthContext";

const AppRoutes = () => {
  const [user, setUser] = useState(undefined);
  const {auth} = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  if (loadingUser) {
    return <p>Carregando....</p>;
  }

  return (
    <AuthProvider value={{ user }}>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/register"
            element={!user ? <Register /> : <Navigate to="/" />}
          />

          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/" />}
          />

          <Route path="/products" element={<Store />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/products/men" element={<ProductsMen />} />
          <Route path="/products/women" element={<ProductsWomen />} />
          <Route
            path="/products/electronics"
            element={<ProductsElectronics />}
          />
          <Route path="/products/jewelery" element={<ProductsJewelery />} />
          <Route path='/search' element={<Search />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
};

export default AppRoutes;
