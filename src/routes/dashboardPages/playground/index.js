/**
 * Created by Brian on 3/8/2017.
 */

import React from 'react';
import Playground from './playground';

export default {
  path: '/playground',

  action() {
    return (
      <div>
        <Playground />
      </div>
  );
  },

};
