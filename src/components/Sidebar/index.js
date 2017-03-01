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
            <li className="sidebar-search"></li>

            <li>
              <a href="" onClick={(e) => { e.preventDefault(); history.push('/'); }} >
                <i className="fa fa-dashboard fa-fw" /> &nbsp;Dashboard
              </a>
            </li>
            <li>
              <a href="" onClick={(e) => { e.preventDefault(); history.push('/blank'); }} >
                Blank
              </a>
            </li>
            <li>
              <a href="http://www.strapui.com/">Premium React Themes</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}


export default Sidebar;
