import React from 'react';
import classes from '../../Styles.module.css';
import { useSelector, useDispatch } from 'react-redux';

const propTypes = {};

const defaultProps = {};

const Book = () => {
  const bookList = useSelector((state) => state.reducer.books);
  return bookList.map((item) => (
    <li key={item.id} className={classes.booklist}>
      <div>
        <div>
          <p>{item.category}</p>
          <h1>{item.title}</h1>
          <h3>{item.author}</h3>
          <div>
            <button type="button">Comments</button>
            <button type="button">Remove</button>
            <button type="button">Edit</button>
          </div>
        </div>
      </div>
    </li>
  ))

};

Book.propTypes = propTypes;
Book.defaultProps = defaultProps;

export default Book;
