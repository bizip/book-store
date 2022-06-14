import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classes from '../../Styles.module.css';
import { remove } from '../../redux/books/books';

const propTypes = {};

const defaultProps = {};

const Book = () => {
  const bookList = useSelector((state) => state.reducer.books);
  const dispatch = useDispatch();
  const handleDelete = (e) => {
    const { id } = e.target;
    // dispatch(remove({ bookList, id }));
  };
  return bookList.map((item) => (
    <li key={item.id} className={classes.booklist}>
      <div>
        <div>
          <p>{item.category}</p>
          <h1>{item.title}</h1>
          <h3>{item.author}</h3>
          <div>
            <button type="button">Comments</button>
            <button type="button" id={item.id} onClick={handleDelete}>Remove</button>
            <button type="button">Edit</button>
          </div>
        </div>
      </div>
    </li>
  ));
};

Book.propTypes = propTypes;
Book.defaultProps = defaultProps;

export default Book;
