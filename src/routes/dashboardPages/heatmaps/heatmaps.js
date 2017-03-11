/**
 * Created by Brian on 3/8/2017.
 */

import React, { PropTypes } from 'react';
import { PageHeader } from 'react-bootstrap';

const title = 'Heatmaps';

function Heatmaps(props, context) {
  context.setTitle(title);
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <PageHeader>Heatmaps</PageHeader>
        </div>
      </div>
    </div>
  );
}


Heatmaps.contextTypes = { setTitle: PropTypes.func.isRequired };
export default Heatmaps;
