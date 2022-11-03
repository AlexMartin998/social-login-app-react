import { useReducer } from 'react';

import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';
import { types } from '../types/types';
import { useEffect } from 'react';
import { useState } from 'react';
import { getEnvironments } from '../../helpers/getEnvironments';

const { VITE_BACK_URL } = getEnvironments();

const init = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return {
    logged: !!user,
    user: user,
  };
};

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {}, init);
  const [user, setUser] = useState(null);


  useEffect(() => {
    const getUser = () => {
      fetch(`${VITE_BACK_URL}/auth/login/success`, {
        method: 'GET',
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Credentials': true,
        },
      })
        .then(response => {
          if (response.status === 200) return response.json();
          throw new Error('Authentication has been failed!');
        })
        .then(resObj => {
          setUser(resObj.user);
          localStorage.setItem('user', JSON.stringify(resObj.user));
        })
        .catch(err => {
          console.log(err);
        });
    };

    getUser();
  }, []);

  // TODO: Hacer q funcione este login, xq no hace nada x el momento - todo lo hace el useEffect
  const login = name => {
    dispatch({
      type: types.login,
      payload: user,
    });
  };

  const logOut = () => {
    localStorage.removeItem('user');

    dispatch({
      type: types.logout,
    });
  };

  return (
    <AuthContext.Provider value={{ ...authState, user, login, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};
