import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../components';
import { Post } from '../pages';

export const PrivateRoutes = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/post/:id" element={<Post />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};
