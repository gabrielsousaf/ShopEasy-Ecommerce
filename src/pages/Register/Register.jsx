import "./Register.css";

import { useAuthentication } from "../../hooks/UseAuthentication";
import { isStrongPassword } from "../../utils/passwordUtils";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { toast } from "react-toastify";

const Register = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const { createUser, error: authError, loading } = useAuthentication();

  const isEmailValid = (email) => {
  const allowedDomains = /@(gmail\.com|hotmail\.com|outlook\.com|yahoo\.com)$/i;
  return allowedDomains.test(email);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const user = {
      displayName,
      email,
      password,
    };

    if (!isEmailValid(email)) {
      setError("Por favor, use um e-mail do Gmail, Hotmail, Outlook ou Yahoo.");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("As senhas precisam ser iguais!", {
        position: toast.POSITION.TOP_LEFT
      });
      setError("As senhas precisam ser iguais");
      return;
    }

    if (!isStrongPassword(password)) {
      toast.error("A senha não contem caracteres especiais!", {
        position: toast.POSITION.TOP_LEFT
      });
      setError(
        "A senha precisa ter pelo menos 8 caracteres uma letra maíuscula um número e um caracter especial"
      );
      return;
    }

    const res = await createUser(user);
    console.log(res);
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  })

  return (
    <main className="register">
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome:</span>
          <input
            name="displayName"
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            placeholder="Nome"
          />
        </label>
        <label>
          <span>Email:</span>
          <input
            name="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email.teste@gmail.com"
          />
        </label>

        <label>
          <span>Senha:</span>
          <input
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Insira a senha"
          />
        </label>

        <label>
          <span>Confirmação de senha:</span>
          <input
            name="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirme a senha"
          />
        </label>

        <div className="RegisterBtn">
          {!loading && <button type="submit">Cadastrar</button> }
          {loading && <button type="submit">Carregando...</button> }
          {error && <p className="error">{error}</p>}
        </div>
      </form>
      <div className="ButtonLogin">
        <p>
          Voçê já tem uma conta?{" "}
          <Link to={`/login`}> Acesse sua conta aqui</Link>
        </p>
      </div>   
    </main>
  );
};

export default Register;
