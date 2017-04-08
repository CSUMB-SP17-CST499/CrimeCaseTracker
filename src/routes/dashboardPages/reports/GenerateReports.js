/**
 * Created by Red-8 on 4/7/2017.
 */
import React, { Component } from 'react';

export default class GenerateReports extends Component{
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
  addCase(newCase){
    //new case will have last used id + 1, will be changed when "actual" IDs are added
    newCase.id = this.state.caseNums.length;

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
        render stats methods
      </div>
    );
  }
}
