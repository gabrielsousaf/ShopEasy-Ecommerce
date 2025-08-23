import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { db } from "../firebase/config"

import{ 
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  signInWithPopup,
  GoogleAuthProvider 
} from "firebase/auth";


import { useState, useEffect } from "react";


export const useAuthentication = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const [cancelled, setCancelled] = useState(false);

  const auth = getAuth();

  function checkIfIsCancelled() {
    if (cancelled) {
      return;
    }
  }

  const createUser = async (data) => {
    checkIfIsCancelled();

    setLoading(true);
    setError(null);

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      await updateProfile(user, {
        displayName: data.displayName,
      });

      setLoading(false);
      toast.success("Usuario logado", {
        position:toast.POSITION.TOP_LEFT
      });
      return user;
    } catch (error) {
  // error.message logged removed in production

      let systemErrorMessage;

      if (error.message.includes("Password")) {
        toast.error("A senha precisa conter pelo menos 8 caracteres", {
          position: toast.POSITION.TOP_LEFT
        });
        systemErrorMessage = "A senha precisa conter pelo menos 8 caracteres";
      } 

      else if (error.message.includes("email-already")) {
        toast.error("E-mail já cadastrado !", {
          position: toast.POSITION.TOP_LEFT
        });
      }

      else {
        systemErrorMessage = "Ocorreu um erro, tente novamente!";
        toast.error("Ocorreu um erro, tente novamente!", {
          position: toast.POSITION.TOP_LEFT
        });
      }

      setLoading(false);
      setError(systemErrorMessage);
    }
  };

  const logout = () => {
    checkIfIsCancelled();
    signOut(auth);
    toast.warning("Usuario deslogado!", {
      position: toast.POSITION.TOP_LEFT
    });
  };

  
  const login = async (data) => {
    checkIfIsCancelled();

    setLoading(true);
    setError(false);

    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      setLoading(false);
      toast.success("Usuario logado", {
        position:toast.POSITION.TOP_LEFT
      });

    } catch (error) {
      let systemErrorMessage;

      if (error.message.includes("user-not-found")) {
        systemErrorMessage = "Usuário não encontrado.";
      } else if (error.message.includes("wrong-password")) {
        systemErrorMessage = "Senha incorreta.";
      } else {
        systemErrorMessage = "Ocorreu um erro, por favor tente novamente.";
      }

      setError(systemErrorMessage);
      setLoading(false);
    }
  };

  const loginWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      setLoading(false);
    } catch (error) {
      setError(
        "Ocorreu um erro no login com o Google. Por favor, tente novamente!"
      );
      setLoading(false);
    }
  };

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return {
    auth,
    createUser,
    error,
    loading,
    logout,
    login,
    loginWithGoogle,
  };
};
