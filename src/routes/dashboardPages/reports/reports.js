/**
 * Created by Brian on 3/8/2017.
 */

import React, { PropTypes } from 'react';
import { PageHeader } from 'react-bootstrap'
import GenerateReports from './GenerateReports'

const title = 'Reports';

function Reports(props, context) {
  context.setTitle(title);
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <PageHeader style={{"margin": "2px"}}>Reports and Statistics</PageHeader>
        </div>
        <GenerateReports />
      </div>
    </div>
  );
}


Reports.contextTypes = { setTitle: PropTypes.func.isRequired };
export default Reports;
