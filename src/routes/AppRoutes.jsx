import React from 'react'
import { Route, Routes } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import Property from '../components/Property';

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProductCard />} />
        <Route path="/property/:title" element={<Property />} />
      </Routes>
    </>
  );
}

export default AppRoutes