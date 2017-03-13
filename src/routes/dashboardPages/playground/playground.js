/**
 * Created by Brian on 3/8/2017.
 */

import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';

const title = 'Playground';

class Playground extends Component{
  constructor(){
    super()

    const casesInDB = [];

    for(let i = 0; i<10; i++){
      casesInDB.push({
        caseNumber: {i},
        crime: {i}
      });
    }

    this.state = { casesInDB };
  }

  render(){
    return(
      <div>
        <h1>TYPING WORDS</h1>
        {this.state.casesInDB.map((thing, index) => (
          <p key={index}>Case Number: {thing.caseNumber}, crime: {thing.crime}</p>
        ))}
      </div>
    );
  }
}

export default Playground;
