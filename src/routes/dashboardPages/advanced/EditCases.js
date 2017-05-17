/**
 * Created by BRX01 on 4/5/2017.
 */
import React, { Component } from 'react';
import { Button, Modal, ButtonToolbar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import { ExitAndSave, ExitWITHOUTSave } from '../../home/EditCases';

export const SimpleAddCaseModal = React.createClass({
  getInitialState() {
    return {
      suspect: this.props.suspect,
      id: this.props.id,
      crime: this.props.crime,
      location: this.props.location,
      status: this.props.status,
      victim: this.props.victim,
      changed: false
    };
  },
  componentWillReceiveProps(){
    //console.log("here");
  },
  handleChange(e){
    this.setState({changed: true});
    this.setState({[e.target.name]: e.target.value})
  },
  onSave(){
    //console.log(this.props.onHide);
    this.props.onHide();
    if (this.state.changed == true){
      this.props.update({
          id: this.props.key,
          suspect: this.state.suspect,
          location: this.state.location,
          status: this.state.status,
          victim: this.state.victim,
          crime: this.state.crime
        }
      );
    }
  },
  onClose(){
    this.props.onHide();
    this.setState(this.getInitialState());
  },
  render() {
    console.log("here");
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
                      <input type="text" onChange={this.handleChange} className="form-control" defaultValue={this.props.id} placeholder="Enter Case #" name="caseNumber" /></div>
                  </div>
                </div>
                <div className="form-group"><label>Crime: </label>
                  <input onChange={this.handleChange} defaultValue={this.state.crime} type="text" className="form-control" placeholder="Enter Crime" name="crime" /></div>
                <div className="form-group"><label>Location: </label>
                  <input type="text" onChange={this.handleChange} defaultValue={this.state.location} className="form-control" name="location" placeholder="Location" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <div className="form-group">
                    <h3>Involved</h3>
                    <label>Reporting Party: </label><input type="text" className="form-control" placeholder="Enter Reporting Party" name="reportingParty" />
                  </div>
                  <div className="form-group"><label>Victim: </label>
                    <input type="text" onChange={this.handleChange} className="form-control" defaultValue={this.state.victim} placeholder="Enter Victim" name="victim" /></div>
                  <div className="form-group"><label>Suspect: </label>
                    <input type="text" onChange={this.handleChange} className="form-control" defaultValue={this.state.suspect} placeholder="Enter Suspect" name="suspect" /></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group"><label>Summary</label>
                  <textarea className="form-control" rows="2" name="summary"></textarea></div>
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

export const AddNewCaseButton = React.createClass({
  getInitialState() {
    return { lgShow: false };
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

        <SimpleAddCaseModal show={this.state.lgShow} onHide={lgClose} />
      </div>
    );
  }
});

export const CaseRow = React.createClass({
  getInitialState() {
    return {
      lgShow: false,
      updatedCase : true
    };
  },
  componentWillReceiveProps(){
    console.log(this.props);
  },
  //Case Number, Crime, Suspect, Victim, Location, Status
  render() {
    let lgClose = () => this.setState({ lgShow: false });

    return (
      <tr onClick={()=>this.setState({ lgShow: true })}>
        <td>{this.props.id}</td>
        <td>{this.props.crime}</td>
        <td>{this.props.suspect}</td>
        <td>{this.props.victim}</td>
        <td>{this.props.location}</td>
        <td><span className={"glyphicon glyphicon-" + this.props.status}></span> </td>
        <SimpleAddCaseModal {... this.props} show={this.state.lgShow} onHide={lgClose} />
      </tr>
    );
  }
});
