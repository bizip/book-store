import React from 'react';
import { useSelector } from 'react-redux';

import SingleBook from './SingleBook';

const propTypes = {};

const defaultProps = {};

const Book = () => {
  const bookList = useSelector((state) => state.bookReducer);
  return <SingleBook bookList={bookList} />;
};

Book.propTypes = propTypes;
Book.defaultProps = defaultProps;

export default Book;
