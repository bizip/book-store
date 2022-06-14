import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import classes from '../../Styles.module.css';
import { add } from '../../redux/books/books';

const propTypes = {};

const defaultProps = {};

const NewBookForm = () => {
  const [data, setData] = useState({
    title: '',
    author: '',
    id: '',
  });
  const dispatch = useDispatch();
  const newBBok = useSelector((state) => state.books);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(add(data));
  };
  const handleChange = (e) => {
    const { name } = e.target;
    setData({
      ...data,
      [name]: e.target.value,
      id: uuidv4(),
    });
  };
  return (
    <div>
      <h1>Add New Book</h1>
      <form className={classes.newbookform} onSubmit={handleSubmit}>
        <input type="text" value={data.title} name="title" onChange={handleChange} placeholder="Book title" />
        <br />
        <br />
        <input type="text" value={data.author} onChange={handleChange} name="author" placeholder="Author" />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
NewBookForm.propTypes = propTypes;
NewBookForm.defaultProps = defaultProps;

export default NewBookForm;
