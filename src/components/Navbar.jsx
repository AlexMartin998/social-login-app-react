import React from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';
import { getEnvironments } from '../helpers/getEnvironments';

const { VITE_BACK_URL } = getEnvironments();

export const Navbar = () => {
  const { user, logOut } = useAuth();

  const handleLogout = () => {
    logOut();
    window.open(`${VITE_BACK_URL}/auth/logout`, '_self');
  };

  return (
    <div className="navbar">
      <span className="logo">
        <Link to="/" className="link">
          Lama App
        </Link>
      </span>
      {user?.id ? (
        <ul className="list">
          <li className="listItem">
            <img
              // src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
              src={
                user?.photos?.at(0)?.value ||
                'https://cdn-icons-png.flaticon.com/512/147/147144.png'
              }
              alt="avata"
              className="avatar"
            />
          </li>
          <li className="listItem">{user?.displayName}</li>
          <li className="listItem" onClick={handleLogout}>
            Logout
          </li>
        </ul>
      ) : (
        <Link to="/login" className="link">
          Login
        </Link>
      )}
    </div>
  );
};
