import React from 'react';

import { Routes, Route } from 'react-router-dom';

import { Dashboard, Login } from '../pages';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
export default AppRoutes;
