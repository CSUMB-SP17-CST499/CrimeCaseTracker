import React, { Component } from 'react';
import { Button, Modal, ButtonToolbar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import ReactDOM from 'react-dom';

export const SimpleCaseModal = React.createClass({
  getInitialState() {
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

export const DeleteCaseModal = React.createClass({
  getInitialState() {
    return {
      caseNumber: this.props.caseNumber
    };
  },
  onDelete(){
    this.props.onHide();
    this.props.deleteCase(this.props.id);
  },
  onClose(){
    this.props.onHide();
  },
  render() {
    return (
      <Modal {...this.props} bsSize="small" aria-labelledby="contained-modal-title-lg">
        <Modal.Body>
          Are you sure you want to delete this case ({this.state.caseNumber})?
        </Modal.Body>
        <Modal.Footer>
            <Button bsStyle="danger" onClick={() => this.onClose()}>Cancel</Button>
            <Button bsStyle="success" onClick={() => this.onDelete()}>Delete</Button>
        </Modal.Footer>
      </Modal>
    );
  }
});

export const DeleteCaseButton = React.createClass({
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
          <Tooltip id="tooltip"><strong>Delete case</strong></Tooltip>}>
          <Button bsStyle="danger" onClick={()=>this.setState({ lgShow: true })}>

            <span className="glyphicon glyphicon-minus-sign"></span>
          </Button>
        </OverlayTrigger>

        <DeleteCaseModal {... this.props} show={this.state.lgShow} onHide={lgClose} />
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
      <tr>
        <td onClick={()=>this.setState({ lgShow: true })}>{this.props.caseNumber}</td>
        <td onClick={()=>this.setState({ lgShow: true })}>{this.props.crime}</td>
        <td onClick={()=>this.setState({ lgShow: true })}>{this.props.suspect}</td>
        <td onClick={()=>this.setState({ lgShow: true })}>{this.props.victim}</td>
        <td onClick={()=>this.setState({ lgShow: true })}>{this.props.location}</td>
        <td onClick={()=>this.setState({ lgShow: true })}>{this.props.status}</td>
        <td><DeleteCaseButton {... this.props}/></td>
        {/*<td><span className={"glyphicon glyphicon-" + this.props.status}></span> </td>*/}
        <SimpleCaseModal {... this.props} show={this.state.lgShow} onHide={lgClose} />
      </tr>
    );
  }
});
