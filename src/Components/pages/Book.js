import React from 'react';

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 *
 */
const Book = () => (
  <li>
    <div>
      <div>
        <p>Action</p>
        <h1>Bizimungu Pascal</h1>
        <div>
          <button type="button">Comments</button>
          <button type="button">Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>
    </div>
  </li>
);

Book.propTypes = propTypes;
Book.defaultProps = defaultProps;
// #endregion

export default Book;
