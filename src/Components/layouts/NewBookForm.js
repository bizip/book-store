import React from 'react';
import classes from '../../Styles.module.css';

const propTypes = {};

const defaultProps = {};

const NewBookForm = () => (
  <div>
    <h1>Add New Book</h1>
    <form className={classes.newbookform}>
      <input type="text" placeholder="Book title" />
      <br />
      <br />
      <input type="text" placeholder="Author" />
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
  </div>
);
NewBookForm.propTypes = propTypes;
NewBookForm.defaultProps = defaultProps;

export default NewBookForm;
