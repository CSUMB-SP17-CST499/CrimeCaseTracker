/**
 * Created by BRX01 on 4/21/2017.
 */
import React, { Component } from 'react';
import { Button, ButtonToolbar, Table, PageHeader } from 'react-bootstrap';
import Autocomplete from 'react-google-autocomplete';

export default class AutoCompleteJS extends Component{

  componentWillMount() {
    let s = document.createElement('script');
    // s.type = 'text/javascript';
    s.async = true;
    s.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyB78QxMztUAN8o7TmfhyoI1fePw5zOfKi8&libraries=places';
    // this.instance.appendChild(s);
    document.body.appendChild(s);
  }

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
