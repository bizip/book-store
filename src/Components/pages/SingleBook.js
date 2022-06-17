import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { CircularProgressbar } from 'react-circular-progressbar';
import { removeBookFunction } from '../../redux/books/books';
import classes from '../../Styles.module.css';
import 'react-circular-progressbar/dist/styles.css';

const propTypes = {};

const SingleBook = (props) => {
  const dispatch = useDispatch();
  const { item } = props;
  const handleDelete = () => {
    const { id } = item;

    dispatch(removeBookFunction(id));
  };
  const percentage = 50;
  return (

    <li className={classes.booklist}>

      <div className={classes.bookData}>
        <p>{item.category}</p>
        <h1>{item.title}</h1>
        <h3>{item.author}</h3>
        <div className={classes.buttons}>
          <button type="button">Comments</button>
          <button type="button" onClick={handleDelete}>Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className={classes.spinnerContainer}>
        <CircularProgressbar value={percentage} className={classes.spinner} />
        <div className={classes.spnContainer}>
          <span className={classes.completef}>
            {percentage}
            %
          </span>
          <span className={classes.status}>Completed</span>
        </div>
      </div>
      <div className={classes.summary}>
        <span className={classes.currentCapter}>CURRENT CHAPTER</span>
        <span className={classes.chapterNumber}>Chapter 17</span>
        <button type="button" className={classes.currentProgress}>UPDATE PROGRESS</button>
      </div>
    </li>
  );
};

SingleBook.propTypes = {
  item: PropTypes.shape({
    author: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }),
};

SingleBook.propTypes = propTypes;
SingleBook.defaultProps = {
  item: PropTypes.shape({
    author: '',
    id: '',
    title: '',
    category: '',
  }),
};

export default SingleBook;
