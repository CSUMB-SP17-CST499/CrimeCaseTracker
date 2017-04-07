/**
 * Created by Brian on 4/3/2017.
 */

import React, { Component } from 'react';
import { Button, ButtonToolbar, Table, PageHeader } from 'react-bootstrap';
import { AddNewCaseButton, SimpleAddCaseModal, CaseRow } from './EditCases.js'

export default class AdvancedSearch extends Component{
  autoSearch(){
    //Search the cases displayed
    var input, filter, table, tr, td, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    td = [];
    for (i = 0; i < tr.length; i++) {
      td[0] = tr[i].getElementsByTagName("td")[0];
      td[1] = tr[i].getElementsByTagName("td")[1];
      td[2] = tr[i].getElementsByTagName("td")[1];
      td[3] = tr[i].getElementsByTagName("td")[1];
      if (td[0] || td[1]) {
        if (td[0].innerHTML.toUpperCase().indexOf(filter) > -1
          || td[1].innerHTML.toUpperCase().indexOf(filter) > -1
          || td[2].innerHTML.toUpperCase().indexOf(filter) > -1
          || td[3].innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  //Render the table. Case Number, Crime, Suspect, Victim
  render(){
    return(
      <div>
        <div className="col-lg-12">
          <PageHeader>Cases</PageHeader>
        </div>
        <input type="text" id="myInput" onKeyUp={()=>this.autoSearch()} placeholder="Search..." title="Type anything"/>
        <AddNewCaseButton />
        <Table striped bordered condensed hover id="myTable">
          <thead>
          <tr>
            <th>Case Number</th>
            <th>Crime</th>
            <th>Suspect</th>
            <th>Victim</th>
          </tr>
          </thead>
          <CaseData />
        </Table>
      </div>
    );
  }
}

export class CaseData extends Component{
  constructor() {
    super()
    this.state = {
      cases: [],
      suspects: [],
      locations: [],
      caseNums: [],
      statuses: []
    }
  }
  componentDidMount(){
    this.loadFromServer();
  }

  loadFromServer(){
    var N = 8;
    var tempCases = [];
    this.state.caseNums = Array.apply(null, {length: N}).map(Number.call, Number);
    this.state.suspects = ["Alfreds Futterkiste", "Berglunds snabbkop", "Island Trading", "Koniglich Essen", "Laughing Bacchus Winecellars", "Magazzini Alimentari Riuniti", "North/South", "Paris specialites"];
    this.state.locations = ["Germany", "Sweden", "UK", "Germany", "Canada", "Italy", "UK", "France"];
    this.state.statuses = ["exclamation-sign", "exclamation-sign", "exclamation-sign", "envelope", "envelope", "check", "check", "check"];

    for (var i = 0; i < 8; i++) {
      tempCases.push({
          id: this.state.caseNums[i],
          suspect: this.state.suspects[i],
          location: this.state.locations[i],
          status: this.state.statuses[i]
        }
      );
    }

    this.setState({cases: tempCases});
  }

  updateCase(newCase){
    //update case at index - directly to AWS server
    console.log("updating case... ");

    //update case on dashboard
    this.state.cases[newCase.id] = newCase;
    this.setState({cases: this.state.cases});

  }

  render(){
    let cases = this.state.cases;
    let update = (id) => this.updateCase(id);
    return(
      <tbody>
      {cases.map((_case) => {
        return <CaseRow {... _case} update={update} />
      })}
      </tbody>

    );
  }
}

