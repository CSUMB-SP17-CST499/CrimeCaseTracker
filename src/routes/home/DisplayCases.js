import React, { Component } from 'react';
import { Button, ButtonToolbar, Table, PageHeader } from 'react-bootstrap';
import { AddNewCaseButton, SimpleAddCaseModal, CaseRow } from './AddNewCase.js'

export default class DisplayCases extends Component{
  autoSearch(){
    var input, filter, table, tr, td, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    td = [];
    for (i = 0; i < tr.length; i++) {
      td[0] = tr[i].getElementsByTagName("td")[0];
      td[1] = tr[i].getElementsByTagName("td")[1];
      if (td[0] || td[1]) {
        if (td[0].innerHTML.toUpperCase().indexOf(filter) > -1
          || td[1].innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

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
          <th>Suspect</th>
          <th>County</th>
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
      counties: [],
      caseNums: []
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
    this.state.counties = ["Germany", "Sweden", "UK", "Germany", "Canada", "Italy", "UK", "France"];

    for (var i = 0; i < 8; i++) {
      tempCases.push({
          id: this.state.caseNums[i],
          suspect: this.state.suspects[i],
          county: this.state.counties[i]
        }
      );
    }

    this.setState({cases: tempCases});
  }

  render(){
    let cases = this.state.cases;
    return(
      <tbody>
      {cases.map((_case) => {
        return <CaseRow {... _case} />
      })}
      </tbody>

    );
  }
}
