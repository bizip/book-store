import React from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { removeBookFunction } from '../../redux/books/books';
import classes from '../../Styles.module.css';

const propTypes = {};

const defaultProps = {};

/**
 *
 */
const SingleBook = (props) => {
  const dispatch = useDispatch();
  const { bookList } = props;
  const handleDelete = (e) => {
    const { id } = e.target;
    dispatch(removeBookFunction(id));
    console.log(props.bookList);
  };
  return (
    bookList.map((item, index = -1) => (
      <li key={index} className={classes.booklist}>
        <div>
          <div>
            {/* <p>{item.category}</p> */}
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
    ))
  );
};

SingleBook.propTypes = propTypes;
SingleBook.defaultProps = defaultProps;
// #endregion

export default SingleBook;
