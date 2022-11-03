import { Navigate } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';

export const PublicRoute = ({ children }) => {
  const { user } = useAuth();

  // return logged ? <Navigate to={lastPath} /> : children;
  return !user?.id ? children : <Navigate to="/" />;
};
