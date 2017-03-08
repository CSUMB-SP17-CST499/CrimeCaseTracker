import React, { Component } from 'react';
import { Button, ButtonToolbar, Table, PageHeader } from 'react-bootstrap';
import { ModalApp } from './AddNewCase.js'

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
      <ModalApp />
      <Table striped bordered condensed hover id="myTable">
      <thead>
        <tr>
          <th>Suspect</th>
          <th>County</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Berglunds snabbkop</td>
          <td>Sweden</td>
        </tr>
        <tr>
          <td>Island Trading</td>
          <td>UK</td>
        </tr>
        <tr>
          <td>Koniglich Essen</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Laughing Bacchus Winecellars</td>
          <td>Canada</td>
        </tr>
        <tr>
          <td>Magazzini Alimentari Riuniti</td>
          <td>Italy</td>
        </tr>
        <tr>
          <td>North/South</td>
          <td>UK</td>
        </tr>
        <tr>
          <td>Paris specialites</td>
          <td>France</td>
        </tr>
    </tbody>
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
      counties: []
    }
  }
  componentDidMount(){
    this.loadFromServer();
  }
  
  loadFromServer(){
    suspects = ["Alfreds Futterkiste", "Berglunds snabbkop", "Island Trading", "Koniglich Essen", "Laughing Bacchus Winecellars", "Magazzini Alimentari Riuniti", "North/South", "Paris specialites"];
    counties = ["Germany", "Sweden", "UK", "Germany", "Canada", "Italy", "UK", "France"];
  }
    
  render(){
    return(
    <div>
      <input type="text" id="myInput" onKeyUp={()=>this.autoSearch()} placeholder="Search..." title="Type anything"/>
      <ModalApp />
      <Table striped bordered condensed hover id="myTable">
      <thead>
        <tr>
          <th>Suspect</th>
          <th>County</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{this.state.suspects[0]}</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Berglunds snabbkop</td>
          <td>Sweden</td>
        </tr>
        <tr>
          <td>Island Trading</td>
          <td>UK</td>
        </tr>
        <tr>
          <td>Koniglich Essen</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Laughing Bacchus Winecellars</td>
          <td>Canada</td>
        </tr>
        <tr>
          <td>Magazzini Alimentari Riuniti</td>
          <td>Italy</td>
        </tr>
        <tr>
          <td>North/South</td>
          <td>UK</td>
        </tr>
        <tr>
          <td>Paris specialites</td>
          <td>France</td>
        </tr>
    </tbody>
      </Table>
    </div>
      
    );
  }
}

export class Case extends Component{
    render(){
        <tr></tr>
    }
}
