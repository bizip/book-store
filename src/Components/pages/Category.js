import React from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { addNewCtegoryFunction } from '../../redux/categories/categories';

const propTypes = {};

const defaultProps = {};

const Category = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  const handleCheckStatus = () => {
    dispatch(addNewCtegoryFunction());
  };

  return (
    <div>
      <button type="button" onClick={handleCheckStatus}>Check status</button>
      <span>{data.categoryReducer.text}</span>
    </div>
  );
};

Category.propTypes = propTypes;
Category.defaultProps = defaultProps;

export default Category;
