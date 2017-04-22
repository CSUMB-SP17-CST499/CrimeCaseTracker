/**
 * Created by BRX01 on 4/21/2017.
 */
import React, { Component } from 'react';
import { Button, ButtonToolbar, Table, PageHeader } from 'react-bootstrap';
import Autocomplete from 'react-google-autocomplete';

export default class complete extends Component() {
  render() {
    return (
      <div>
        <Autocomplete
          style={{width: '90%'}}
          onPlaceSelected={(place) => {
            console.log(place);
          }}
          types={['(regions)']}
          componentRestrictions={{country: "US"}}
        />
      </div>
    );
  }
}
