import React, { Component } from 'react';
import { Button, Modal, ButtonToolbar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import ReactDOM from 'react-dom';

export const SimpleCaseModal = React.createClass({
  getInitialState() {
    console.log("key: " + this.props.id);
    return {
      id: this.props.id,
      suspect: this.props.suspect,
      location: this.props.location,
      status: this.props.status,
      caseNumber: this.props.caseNumber,
      reportingParty: this.props.reportingParty,
      victim: this.props.victim,
      crime: this.props.crime,
      summary: this.props.summary,
      changed: false
    };
  },
  handleChange(e){
    console.log("flag changed");
    this.setState({changed: true});
    this.setState({[e.target.name]: e.target.value})
  },
  onSave(){
    this.props.onHide();
    var newCase = {
      id: this.state.id,
      suspect: this.state.suspect,
      location: this.state.location,
      status: this.state.status,
      caseNumber: this.state.caseNumber,
      reportingParty: this.state.reportingParty,
      victim: this.state.victim,
      crime: this.state.crime,
      summary: this.state.summary
    };

    if (this.props.new){
      newCase.status = "asterisk";
      this.props.add(newCase);
      this.setState(this.getInitialState());
    }
    else{
      if (this.state.changed == true){
        this.props.update(newCase);

      }
    }
  },
  onClose(){
    this.props.onHide();
    this.setState(this.getInitialState());
  },
  render() {
    return (
      <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg">
        <Modal.Body>
          <div className="panel-body">
            <div className="row">
              <div className="col-lg-6">
                <h3>Report Information</h3>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group input-group date" id="datetimepicker1"><label>Report Date:</label><input type="date" className="form-control" name="reportDate" /></div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group"><label>Case Number: </label>
                      <input type="text" onChange={this.handleChange} defaultValue={this.state.caseNumber} className="form-control" placeholder="Enter Case #" name="caseNumber" /></div>
                  </div>
                </div>
                <div className="form-group"><label>Crime: </label>
                  <input type="text" onChange={this.handleChange} defaultValue={this.state.crime} className="form-control" placeholder="Enter Crime" name="crime" />
                </div>
                <div className="form-group"><label>Location: </label>
                  <input type="text" onChange={this.handleChange} defaultValue={this.state.location} className="form-control" name="location" placeholder="Location" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <div className="form-group">
                    <h3>Involved</h3>
                    <label>Reporting Party: </label>
                    <input type="text" onChange={this.handleChange} defaultValue={this.state.reportingParty} className="form-control" placeholder="Enter Reporting Party" name="reportingParty" />
                  </div>
                  <div className="form-group"><label>Victim: </label>
                    <input type="text" onChange={this.handleChange} defaultValue={this.state.victim}  className="form-control" placeholder="Enter Victim" name="victim" /></div>
                  <div className="form-group"><label>Suspect: </label>
                    <input type="text" onChange={this.handleChange} className="form-control" defaultValue={this.state.suspect} placeholder="Enter Suspect" name="suspect" /></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group"><label>Summary</label>
                  <textarea onChange={this.handleChange} defaultValue={this.state.summary} className="form-control" rows="2" name="summary"></textarea></div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group"><span><label>Property:</label><input type="checkbox" name="property" value="1"/></span><span style={{"padding": "10px"}}><label>Evidence:</label><input type="checkbox" name="evidence" value="1"/></span></div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <OverlayTrigger placement="top" overlay={ExitWITHOUTSave}>
            <Button bsStyle="danger" onClick={() => this.onClose()}>Close</Button>
          </OverlayTrigger>
          <OverlayTrigger placement="top" overlay={ExitAndSave}>
            <Button bsStyle="success" onClick={() => this.onSave()}>Save</Button>
          </OverlayTrigger>
        </Modal.Footer>
      </Modal>
    );
  }
});

export const ExitAndSave = (
  <Tooltip id="tooltip">Exit <strong>AND SAVE</strong>.</Tooltip>
);

export const ExitWITHOUTSave = (
  <Tooltip id="tooltip">Exit <strong>WITHOUT</strong> saving.</Tooltip>
);

export const AddNewCaseButton = React.createClass({
  getInitialState() {
    return {
      lgShow: false,
      new: true
    };
  },
  render() {
    let lgClose = () => this.setState({ lgShow: false });

    return (
      <div style={{'display':'inline-block'}}>
        <OverlayTrigger placement="left" overlay={
          <Tooltip id="tooltip"><strong>Add new case</strong></Tooltip>}>
          <Button bsStyle="success" onClick={()=>this.setState({ lgShow: true })}>

            <span className="glyphicon glyphicon-plus"></span>
          </Button>
        </OverlayTrigger>

        <SimpleCaseModal {... this.props} show={this.state.lgShow} new={true} onHide={lgClose} />
      </div>
    );
  }
});

export const CaseRow = React.createClass({
  getInitialState() {
    return {
      lgShow: false,
      new: false
    };
  },
  render() {
    let lgClose = () => this.setState({ lgShow: false });

    return (
      <tr onClick={()=>this.setState({ lgShow: true })}>
        <td>{this.props.caseNumber}</td>
        <td>{this.props.crime}</td>
        <td>{this.props.suspect}</td>
        <td>{this.props.victim}</td>
        <td>{this.props.location}</td>
        <td>{this.props.status}</td>
        {/*<td><span className={"glyphicon glyphicon-" + this.props.status}></span> </td>*/}
        <SimpleCaseModal {... this.props} show={this.state.lgShow} onHide={lgClose} />
      </tr>
    );
  }
});

//modal tailored to Monterey County Sheriff's Department
export const CaseModal = React.createClass({
  render() {
    return (
      <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg">
        <Modal.Body>
          <div className="panel-body">
            <div className="row">
              <div className="col-lg-6">
                <h1>Report Information</h1>
                <div className="form-group input-group date" id="datetimepicker1">
                  <label>Report Date:</label>
                  <input type="date" className="form-control" name="reportDate"/>
                </div>

                <div className="form-group">
                  <label>Case Number: </label>
                  <input type="text" className="form-control" placeholder="Enter Case #" name="caseNumber"/>
                </div>
                <div className="form-group">
                  <label>Crime: </label>
                  <input type="text" className="form-control" placeholder="Enter Crime" name="crime"/>
                </div>
                <div className="form-group">
                  <label>Location: </label>
                  <input type="text" className="form-control" placeholder="Enter Location" name="location"/>
                </div>
                <div className="form-group">
                  <label>Reporting Party: </label>
                  <input type="text" className="form-control" placeholder="Enter Reporting Party" name="reportingParty"/>
                </div>
                <div className="form-group">
                  <label>Victim: </label>
                  <input type="text" className="form-control" placeholder="Enter Victim" name="victim"/>
                </div>
                <div className="form-group">
                  <label>Suspect: </label>
                  <input type="text" className="form-control" placeholder="Enter Suspect" name="suspect"/>
                </div>
                <div className="form-group">
                  <label>Reporting Deputy: </label>
                  <select className="form-control" name="reportingDeputy">
                  </select>
                </div>

                <div className="form-group">
                  <label>Checkboxes</label>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" value="1" name="flaggedCase"/>Flagged Case
                    </label>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" value="1"/>Ag Crime
                    </label>
                  </div>
                </div>

              </div>
              <div className="col-lg-6">
                <h1>Case Assignment Information</h1>
                <div className="form-group">
                  <label>Status:</label>
                  <select className="form-control" name="status">
                    <option value="Active" >Active</option>
                    <option value="Warrant" >Warrant</option>
                    <option value="Closed" >Closed</option>
                    <option value="Suspended" >Suspended</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Assigned To:</label>
                  <select className="form-control" name="assignedTo">
                  </select>
                </div>
                <div className="form-group">
                  <label>Unit:</label>
                  <select className="form-control" name="unit">
                    <option value="SV-SA" >DV-SA</option>
                    <option value="Narcotics" >Narcotics </option>
                    <option value="Persons" >Persons</option>
                    <option value="Property" >Property </option>
                    <option value="SED" >SED </option>
                    <option value="MADCAT" >MADCAT </option>
                    <option value="AG Unit" >AG Unit </option>
                  </select>
                </div>

                <div className="form-group">
                  <label for="disabledSelect">Assigned By</label>
                  <select id="disabledSelect" className="form-control">
                    <option></option>
                  </select>
                </div>

                <div className="from-group">
                  <label>Follow Up Date:</label>
                  <input type="date" className="form-control" name="followUpDate"/>
                </div>

                <div className="form-group">
                  <label>Complaint Action:</label>
                  <select className="form-control" name="complaintAction">
                    <option value="To DA" >To DA</option>
                    <option value="Pending Court" >Pending Court</option>
                    <option value="Warrant Issued" >Warrant Issued</option>
                    <option value="Other" >Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Property:</label>
                  <input type="checkbox" name="property" value="1"/>
                </div>
                <div className="form-group">
                  <label>Evidence:</label>
                  <input type="checkbox" name="evidence" value="1"/>
                </div>

                <h2>Siezures</h2>
                <div className="form-group">
                  <label>Cash:</label>
                  <input type="checkbox" name="cash" value="1"/>
                </div>
                <div className="form-group">
                  <label>Narcotics:</label>
                  <input type="checkbox" name="narcotics" value="1"/>
                </div>
                <div className="form-group">
                  <label>Weapons:</label>
                  <input type="checkbox" name="weapons" value="1"/>
                </div>
              </div>
            </div>

            <div className="row">
              <div className= "col-md-12">
                <div className="form-group">
                  <label>Summary</label>
                  <textarea className="form-control" rows="4" name="summary"></textarea>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
          <Button onClick={this.props.onHide}>Save</Button>
        </Modal.Footer>
      </Modal>
    );
  }
});
