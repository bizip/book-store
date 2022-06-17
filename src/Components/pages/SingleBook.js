import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { removeBookFunction } from '../../redux/books/books';
import classes from '../../Styles.module.css';

const propTypes = {};

const defaultProps = {};

const SingleBook = (props) => {
  const dispatch = useDispatch();
  const { item } = props;
  const handleDelete = () => {
    const { id } = item;

    dispatch(removeBookFunction(id));
  };
  return (

    <li className={classes.booklist}>
      <div>
        <div>
          <p>{item.category}</p>
          <h1>{item.title}</h1>
          <h3>{item.author}</h3>
          <div>
            <button type="button">Comments</button>
            <button type="button" onClick={handleDelete}>Remove</button>
            <button type="button">Edit</button>
          </div>
        </div>
      </div>
    </li>
  );
};

SingleBook.propTypes = {
  // eslint-disable-next-line react/require-default-props
  item: PropTypes.shape({
    author: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }),
};

SingleBook.propTypes = propTypes;
SingleBook.defaultProps = defaultProps;
// #endregion

export default SingleBook;
