import React from 'react';
import { useSelector } from 'react-redux';

import SingleBook from './SingleBook';

const propTypes = {};

const defaultProps = {};

const Book = () => {
  const bookList = useSelector((state) => state.bookReducer);
  return bookList.map((item) => (
    <SingleBook key={item.id} item={item} />
  ));
};

Book.propTypes = propTypes;
Book.defaultProps = defaultProps;

export default Book;
