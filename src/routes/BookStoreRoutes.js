import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Category from '../Components/pages/Category';
import Home from '../Components/pages/Home';

const propTypes = {};

const defaultProps = {};

const BookStoreRoutes = () => (
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/category" element={<Category />} />
  </Routes>
);

BookStoreRoutes.propTypes = propTypes;
BookStoreRoutes.defaultProps = defaultProps;
// #endregion

export default BookStoreRoutes;
