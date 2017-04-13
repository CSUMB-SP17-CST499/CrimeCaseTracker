/**
 * Created by Red-8 on 4/12/2017.
 */


import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import AdvancedSearch from './advancedSearch.js';

import s from '../../home/Home.css';
const title = 'Advanced Search';

function Advanced(props, context) {
  context.setTitle(title);
  return (
      <AdvancedSearch />
  );
}

Advanced.propTypes = {
  // news: PropTypes.arrayOf(PropTypes.shape({
  //   title: PropTypes.string.isRequired,
  //   link: PropTypes.string.isRequired,
  //   contentSnippet: PropTypes.string,
  // })).isRequired,
};
Advanced.contextTypes = { setTitle: PropTypes.func.isRequired };

export default withStyles(s)(Advanced);
