import React from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../../redux/books/books';

const propTypes = {};

const defaultProps = {};

const Category = () => {
  const dispatch = useDispatch();
  const handleTestRedux = () => {
    dispatch(add());
  };
  return (
    <div>
      <button type="button" onClick={handleTestRedux}>Check status</button>
    </div>
  );
};

Category.propTypes = propTypes;
Category.defaultProps = defaultProps;

export default Category;
