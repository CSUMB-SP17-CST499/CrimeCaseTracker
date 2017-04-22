import React, { PropTypes } from 'react';
import { PageHeader } from 'react-bootstrap';
import AutocompleteJS from 'react-google-autocomplete';
import AutoCompleteJS from "./AutoCompleteJS";

const title = 'Blank';

function displayBlank(props, context) {
  context.setTitle(title);
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <PageHeader>Statistics</PageHeader>
          <AutoCompleteJS/>
        </div>
      </div>
    </div>
  );
}


displayBlank.contextTypes = { setTitle: PropTypes.func.isRequired };
export default displayBlank;
