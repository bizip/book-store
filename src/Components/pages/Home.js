import React from 'react';
import { data } from '../../boooks-data/Data';
import NewBookForm from '../layouts/NewBookForm';
import Book from './Book';

const propTypes = {};

const defaultProps = {};

/**
 *
 */
const Home = () => (
  <div>
    <Book data={data} />
    <NewBookForm />
  </div>
);

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;
// #endregion

export default Home;
