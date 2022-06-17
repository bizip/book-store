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

  return bookList.map((item) => (
    <SingleBook key={item.id} item={item} />
  ));
};

Book.propTypes = propTypes;
Book.defaultProps = defaultProps;

export default Book;
