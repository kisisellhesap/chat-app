import { signInWithPopup } from "firebase/auth";
import React from "react";
import { auth, provider } from "../firebase";
const LoginPage = () => {
  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section className="login-page small-c">
      <h3>Chat Odası</h3>
      <span>Devam Etmek için Giriş Yapın</span>

      <button onClick={handleClick}>
        <img src="/google.png" /> Google ile Giriş Yap
      </button>
    </section>
  );
};

export default LoginPage;
