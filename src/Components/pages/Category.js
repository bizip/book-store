import React from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { addNewCtegoryFunction } from '../../redux/categories/categories';

const propTypes = {};

const defaultProps = {};

const Category = () => {
  const dispatch = useDispatch();
  const handleCheckStatus = () => {
    dispatch(addNewCtegoryFunction());
  };
  return (
    <div>
      <button type="button" onClick={handleCheckStatus}>Check status</button>
    </div>
  );
};

Category.propTypes = propTypes;
Category.defaultProps = defaultProps;

export default Category;
