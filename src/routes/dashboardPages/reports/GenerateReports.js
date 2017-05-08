/**
 * Created by Red-8 on 4/7/2017.
 */
/* global Plotly */
// Plot.js
import React, { Component } from 'react';
import { getAllFromTable } from '../../../public/fetchDB';
import {LineChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart} from 'Recharts';

const data2 = [
  {name: 'stabbing', 2015: 12, 2016: 14, amt: 2400},
  {name: 'shooting', 2015: 6, 2016: 4, amt: 2210},
  {name: 'suicide', 2015: 3, 2016: 4, amt: 2290}
];
const SimpleBarChart = React.createClass({
  render () {
    return (
      <BarChart width={600} height={300} data={data2}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}>
        <XAxis dataKey="name"/>
        <YAxis/>
        <CartesianGrid strokeDasharray="3 3"/>
        <Tooltip/>
        <Legend />
        <Bar dataKey="2015" fill="#8884d8" />
        <Bar dataKey="2016" fill="#82ca9d" />
      </BarChart>
    );
  }
})

export default class GenerateReports extends Component{
  constructor() {
    super()
    this.state = {
      cases:[],
      crimes: []
    }
  }
  componentDidMount(){
    getAllFromTable('Casetrack').then((cases) => {
      console.log(cases);
      this.setState({cases: cases});
      console.log(this.state.cases.length);
    });

    var obj = { };

    for (var i in this.state.cases){
      //this.state.crimes.push(cases[i].Crime.toUpperCase());
      console.log(this.state.cases[i].Crime.toUpperCase());
      console.log("hello");
    }

    this.setState({crimes: this.state.crimes});

    console.log("crimes: ");
    console.log(this.state.crimes);

    for (var i = 0; i < this.state.cases.length; i++) {
      obj[arr[i]] = (obj[arr[i]] || 0) + 1;
      console.log("i:" + i);
    }


  }
  render(){
    return(
      <div id="myDiv">
        <div style={{"margin": "40px"}}>
          <SimpleBarChart/>
        </div>
      </div>
    );
  }
}

