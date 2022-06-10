import React from 'react';
import classes from '../../Styles.module.css';

const propTypes = {};

const defaultProps = {};

const Book = (props) => (
  props.data.map((item) => (
    <li key={item.id} className={classes.booklist}>
      <div>
        <div>
          <p>{item.category}</p>
          <h1>{item.Author}</h1>
          <div>
            <button type="button">Comments</button>
            <button type="button">Remove</button>
            <button type="button">Edit</button>
          </div>
        </div>
      </div>
    </li>
  ))

);

Book.propTypes = propTypes;
Book.defaultProps = defaultProps;

export default Book;
