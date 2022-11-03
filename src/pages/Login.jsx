import React from 'react';

import Google from './../assets/img/google.png';
import Facebook from './../assets/img/facebook.png';
import Github from './../assets/img/github.png';
import { useAuth } from '../hooks/useAuth';
import { getEnvironments } from '../helpers/getEnvironments';

const { VITE_BACK_URL } = getEnvironments();

export const Login = () => {
  const { login } = useAuth();

  const handleClick = () => {
    login('Alex Auth');
  };

  const loginGoogle = () => {
    // abrir el dialog de google en la misma pag
    window.open(`${VITE_BACK_URL}/auth/google`, '_self');
  };

  const loginGithub = () => {
    // abrir el dialog de google en la misma pag
    window.open(`${VITE_BACK_URL}/auth/github`, '_self');
  };

  const loginFacebook = () => {
    // abrir el dialog de google en la misma pag
    window.open(`${VITE_BACK_URL}/auth/facebook`, '_self');
  };

  return (
    <div className="login">
      <h1 className="loginTitle">Choose a Login Method</h1>
      <div className="wrapper">
        <div className="left">
          <div className="loginButton google" onClick={loginGoogle}>
            <img src={Google} alt="" className="icon" />
            Google
          </div>
          <div className="loginButton facebook" onClick={loginFacebook}>
            <img src={Facebook} alt="" className="icon" />
            Facebook
          </div>
          <div className="loginButton github" onClick={loginGithub}>
            <img src={Github} alt="" className="icon" />
            Github
          </div>
        </div>
        <div className="center">
          <div className="line" />
          <div className="or">OR</div>
        </div>
        <div className="right">
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Password" />
          <button className="submit" onClick={handleClick}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
