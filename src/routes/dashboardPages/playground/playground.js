/**
 * Created by Brian on 3/8/2017.
 */

import React, { Component } from 'react';
import { PageHeader, Table } from 'react-bootstrap';

const title = 'Playground';

class Playground extends Component{
  constructor(){
    super();

    const casesInDB = [];
    for(let i = 0; i<10; i++){
      casesInDB.push({
        caseNumber: i,
        crime: i*i
      });
    }


    casesInDB.push({
      caseNumber: 123,
      crime: 111
    });
    casesInDB.push({
      caseNumber: 456,
      crime: 222
    });

    this.state = { casesInDB };
  }

  render(){
    return(
      <div>
        <h1>TYPING WORDS</h1>
        {this.state.casesInDB.map((thing, index) => (
          <div key={index}>
            <Table striped bordered condensed hover id="myTable">
              <thead>
              <tr>
                <th>Case Number</th>
                <th>Crime</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>{thing.caseNumber}</td>
                <td>{thing.crime}</td>
              </tr>
              </tbody>
            </Table>
            </div>
        ))}
      </div>
    );
  }
}

export default Playground;
