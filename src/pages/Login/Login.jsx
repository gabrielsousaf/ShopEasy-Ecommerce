import "./Login.css";

import { useState, useEffect } from "react";
import { useAuthentication } from "../../hooks/UseAuthentication";
import { Link } from "react-router-dom";


const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const user = {
      email,
      password
    }

  await login(user);
  }

  useEffect(() => {
    if(authError) {
      setError(authError);
    }
  }, [authError])


  return (
    <main className="register">
      <form onSubmit={handleSubmit}>
        <label>
          <span>Email:</span>
          <input
            name="email"
            type="text"
            placeholder="email.teste@gmail.com"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label>
          <span>Senha:</span>
          <input 
            name="password"
            type="password"
            placeholder="Insira a senha" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        <div className="RegisterBtn">
          {!loading && <button className="button" type="submit">Entrar</button> }    
          {loading && <button disabled >AGUARDE...</button>}
          {error && <p className="error">{error}</p>}
        </div>
      </form>
      <div className="ButtonLogin">
        <p>
          Voçê não tem uma conta? <Link to={`/register`}> Crie uma conta aqui</Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
