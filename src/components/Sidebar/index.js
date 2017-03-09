import React, { Component } from 'react';
// import classNames from 'classnames';
import history from '../../core/history';

class Sidebar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      uiElementsCollapsed: true,
      chartsElementsCollapsed: true,
      multiLevelDropdownCollapsed: true,
      thirdLevelDropdownCollapsed: true,
      samplePagesCollapsed: true,
    };
  }

  render() {
    return (
      <div className="navbar-default sidebar" style={{ marginLeft: '-20px' }} role="navigation">
        <div className="sidebar-nav navbar-collapse collapse">
          <ul className="nav in" id="side-menu">
            <li>
              <a href="" onClick={(e) => { e.preventDefault(); history.push('/'); }} >
                <i className="fa fa-dashboard fa-fw" /> &nbsp;Dashboard
              </a>
            </li>
            <li>
              <a href="" onClick={(e) => { e.preventDefault(); history.push('/addCase'); }}>
                <i className="fa fa-edit fa-fw" /> &nbsp;New Case</a>
            </li>
            <li>
              <a href="#"><i className="fa fa-bar-chart-o fa-fw" /> Analytics & Reports<span className="fa arrow" ></span></a>
              <ul className="nav nav-second-level">
                <li>
                  <a href="" onClick={(e) => { e.preventDefault(); history.push('/reports'); }}>Request Reports</a>
                </li>
                <li>
                  <a href="" onClick={(e) => { e.preventDefault(); history.push('/heatmaps'); }}>Heatmaps</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="" onClick={(e) => { e.preventDefault(); history.push('/advancedSearch'); }}>
                <i className="fa fa-search fa-fw" /> &nbsp;Advanced Search</a>
            </li>
            <li>
              <a href="" onClick={(e) => { e.preventDefault(); history.push('/feedback'); }}>
                <i className="fa fa-comment-o fa-fw" /> &nbsp;Give Feedback</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}


export default Sidebar;
