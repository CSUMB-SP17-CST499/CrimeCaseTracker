import React, { Component } from 'react';
import { Button, ButtonToolbar, Table, PageHeader, DropdownButton, MenuItem } from 'react-bootstrap';
import { AddNewCaseButton, CaseRow } from './EditCases.js';
import getUserCases from '../../../src/public/fetchDB';

export default class Dashboard extends Component{
  constructor() {
    super()
    this.state = {
      cases: [],
      view: "You"
    }
  }
  componentDidMount(){
    this.loadFromServer();
  }
  loadFromServer(){
    getUserCases('dude').then((cases) => {
      console.log(cases);
      this.setState({cases: cases});
    });
  }
  handleSelect(e){
    console.log("key: " + e);
    this.setState({view: e});
    //console.log("state: " + this.state.view);
  }
  addCase(newCase){
    //new case will have last used id + 1, will be changed when "actual" IDs are added
    newCase.id = this.state.cases.length;

    this.setState({cases: this.state.cases.concat(newCase)});
  }
  updateCase(newCase){
    //update case at index - directly to AWS server
    console.log("updating case... ");

    //update case on dashboard
    this.state.cases[newCase.id] = newCase;
    this.setState({cases: this.state.cases});
  }
  render(){
    let add = (c) => this.addCase(c);
    return(
      <div>
        <div className="col-lg-12">
          <PageHeader>
            Cases
            <DropdownButton onSelect={(e) => this.handleSelect(e)} style={{"margin": "10px"}} bsStyle={"info"} title={this.state.view}  >
              <MenuItem eventKey="You">You</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey="Closed">Closed</MenuItem>
              <MenuItem eventKey="All">All</MenuItem>
            </DropdownButton>
          </PageHeader>

        </div>
        <CaseSearchBox id="myTable" />
        <AddNewCaseButton add={add} />
        <Table striped bordered condensed hover id="myTable">
          <thead>
          <tr>
            <th>Case Number</th>
            <th>Crime</th>
            <th>Suspect</th>
            <th>Victim</th>
            <th>Location</th>
            <th>Status</th>
          </tr>
          </thead>
          <CaseData cases={this.state.cases} />
        </Table>
      </div>
    );
  }
}

export class CaseData extends Component{
  constructor() {
    super()
    this.state = {
      cases: []
    }
  }
  addCase(newCase){
    this.setState({cases: this.state.cases.concat(newCase)});
  }
  updateCase(newCase){
    //update AND retrieve case at index - directly to/from AWS server
    console.log("updating case... ");

    console.log("new case:");
    console.log(newCase);
    //update case on dashboard
    this.state.cases[newCase.id] = newCase;
    this.setState({cases: this.state.cases});
  }
  componentWillReceiveProps(newProps) {
    this.setState({cases: newProps.cases});
  }
  render(){
    let cases = this.state.cases;
    let update = (c) => this.updateCase(c);
    let add = (c) => this.addCase(c);
    return(
      <tbody>
      {cases.map((_case, i) => {
        return <CaseRow key={i} id={i} {... _case} update={update} />
      })}
      </tbody>
    );
  }
}

class CaseSearchBox extends Component{
  autoSearch(){
    var input, filter, table, tr, td, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById(this.props.id);
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
    return (
      <input type="text" id="myInput" onKeyUp={() => this.autoSearch()} placeholder="Search..." />
    );
  }
}
