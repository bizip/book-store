import React from 'react';
import { data } from '../../boooks-data/Data';
import Book from './Book';

const propTypes = {};

const defaultProps = {};

/**
 *
 */
const Home = () => (
  <div>
    <Book data={data} />
  </div>
);

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;
// #endregion

export default Home;
