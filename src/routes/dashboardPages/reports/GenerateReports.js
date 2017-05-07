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
      cases:[]
    }
  }
  componentWillMount(){
    var plotScript = document.createElement('script');
    plotScript.setAttribute('src','https://cdn.plot.ly/plotly-latest.min.js');
    document.head.appendChild(plotScript);

  }
  componentDidMount(){
    getAllFromTable('Casetrack').then((cases) => {
      console.log(cases);
      this.setState({cases: cases});
    });

    console.log("hello");
    var obj = { };
    for (var i = 0; i < this.state.cases.length; i++) {
      obj[arr[i]] = (obj[arr[i]] || 0) + 1;
      console.log("i:" + i);
    }

    console.log("obj");
    console.log(obj);

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

