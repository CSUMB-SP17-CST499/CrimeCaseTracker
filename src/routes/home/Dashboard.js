import React, { Component } from 'react';
import { Button, ButtonToolbar, Table, PageHeader, DropdownButton, MenuItem } from 'react-bootstrap';
import { AddNewCaseButton, CaseRow } from './EditCases.js';
import { getAllFromTable, getUserCases } from '../../../src/public/fetchDB';


export default class Dashboard extends Component{
  constructor() {
    super()
    this.state = {
      cases: [],
      messages:[],
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
    if (e != this.state.view){
      this.setState({view: e});
      if (e == "All"){
        getAllFromTable('case').then((cases) => {
          console.log(cases);
          this.setState({cases: cases});
        });
      }
      else if(e == "You"){
        getUserCases('dude').then((cases) => {
          console.log(cases);
          this.setState({cases: cases});
        });
      }
    }
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
          <PageHeader style={{"margin": "2px"}}>
            <span>Cases</span>
            <DropdownButton onSelect={(e) => this.handleSelect(e)}
                            style={{"margin": "10px"}}
                            bsStyle={"info"}
                            title={this.state.view}  >
              <MenuItem eventKey="You">You</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey="All">All</MenuItem>
            </DropdownButton>
          </PageHeader>
        </div>
        <CaseSearchBox id="myTable" />
        <AddNewCaseButton add={add} />

        <Table striped bordered condensed hover id="myTable">
          <CaseHeaderRow />
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
  deleteCase(id){
    this.state.cases.splice(id, 1);
    this.setState({cases: this.state.cases});
  }
  componentWillReceiveProps(newProps) {
    this.setState({cases: newProps.cases});
  }
  render(){
    let cases = this.state.cases;
    let update = (c) => this.updateCase(c);
    let deleteCase = (c) => this.deleteCase(c);
    return(
      <tbody>
      {cases.map((_case, i) => {
        return <CaseRow key={i} id={i} {... _case} deleteCase={deleteCase} update={update} />
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
      td[2] = tr[i].getElementsByTagName("td")[2];
      td[3] = tr[i].getElementsByTagName("td")[3];
      td[4] = tr[i].getElementsByTagName("td")[4];
      td[5] = tr[i].getElementsByTagName("td")[5];
      if (td[0] || td[1] || td[2] || td[3] || td[4] || td[5]) {
        if (
          td[0].innerHTML.toUpperCase().indexOf(filter) > -1 ||
          td[1].innerHTML.toUpperCase().indexOf(filter) > -1 ||
          td[2].innerHTML.toUpperCase().indexOf(filter) > -1 ||
          td[3].innerHTML.toUpperCase().indexOf(filter) > -1 ||
          td[4].innerHTML.toUpperCase().indexOf(filter) > -1 ||
          td[5].innerHTML.toUpperCase().indexOf(filter) > -1
        )
          {
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

class CaseHeaderRow extends Component{
  render(){
    return (
      <thead>
      <tr>
        <CaseHeader text="ID" col={0} />
        <CaseHeader text="Crime" col={1} />
        <CaseHeader text="Suspect" col={2} />
        <CaseHeader text="Victim" col={3} />
        <CaseHeader text="Location" col={4} />
        <CaseHeader text="Status" col={5} />
        <th></th>
      </tr>
      </thead>
    );
  }
}

class CaseHeader extends Component{
  sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("myTable");
    switching = true;
    //Set the sorting direction to ascending:
    dir = "asc";
    /*Make a loop that will continue until
     no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.getElementsByTagName("tr");
      /*Loop through all table rows (except the
       first, which contains table headers):*/
      for (i = 1; i < (rows.length - 1); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
         one from current row and one from the next:*/
        x = rows[i].getElementsByTagName("td")[n];
        y = rows[i + 1].getElementsByTagName("td")[n];
        /*check if the two rows should switch place,
         based on the direction, asc or desc:*/
        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            //if so, mark as a switch and break the loop:
            shouldSwitch= true;
            break;
          }
        } else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            //if so, mark as a switch and break the loop:
            shouldSwitch= true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        /*If a switch has been marked, make the switch
         and mark that a switch has been done:*/
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        //Each time a switch is done, increase this count by 1:
        switchcount ++;
      } else {
        /*If no switching has been done AND the direction is "asc",
         set the direction to "desc" and run the while loop again.*/
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }
  render(){
    return (
      <th onClick={() => this.sortTable(this.props.col)}>
        {this.props.text}
        <i className="fa fa-fw fa-sort"></i>
      </th>
    );
  }
}
