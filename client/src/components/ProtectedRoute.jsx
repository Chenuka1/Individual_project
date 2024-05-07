import React from 'react';
import { Route, Navigate } from 'react-router-dom';

function ProtectedRoute({ element: Element, ...props }) {
  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <Route
      {...props}
      element={isAuthenticated ? <Element {...props} /> : <Navigate to="/" replace />}
    />
  );
}

export default ProtectedRoute;
