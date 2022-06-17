import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { displayBookFunction } from '../../redux/books/books';

import SingleBook from './SingleBook';

const propTypes = {};

const defaultProps = {};

const Book = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(displayBookFunction());
  }, []);
  const bookList = useSelector((state) => state.bookReducer);

  return bookList.map((item, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <SingleBook key={index} item={item} />
  ));
};

Book.propTypes = propTypes;
Book.defaultProps = defaultProps;

export default Book;
