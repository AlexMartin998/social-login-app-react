import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home, Login } from '../pages';
import { PrivateRoute } from './PrivateRoute';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />

          <Route path="/" element={<Home />} />

          <Route
            path="*"
            element={
              <PrivateRoute>
                <PrivateRoutes />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};
