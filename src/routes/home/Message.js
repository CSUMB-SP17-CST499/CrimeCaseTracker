/**
 * Created by Red-8 on 4/27/2017.
 */
import React, { Component } from 'react';
import { Button, Modal, ButtonToolbar, OverlayTrigger, Tooltip } from 'react-bootstrap';

export const MessagesModal = React.createClass({
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
          Messages ({this.state.caseNumber})
        </Modal.Body>
        <Modal.Footer>
          <Button bsStyle="success" onClick={() => this.onClose()}>OK</Button>
        </Modal.Footer>
      </Modal>
    );
  }
});

export const MessageIcon = React.createClass({
  getInitialState() {
    return {
      lgShow: false,
      new: this.props.new
    };
  },
  viewMessage(){
    this.setState({ lgShow: true });
    this.props.view();
  },
  render() {
    let lgClose = () => this.setState({ lgShow: false });

    return (
      <span style={{"float": "right"}}>
        <OverlayTrigger placement="left" overlay={
          <Tooltip><strong>Messages</strong></Tooltip>}>
          <span style={{"color": this.props.new, "cursor": "pointer"}}
                onClick={()=>this.viewMessage()}
                className="glyphicon glyphicon-envelope"></span>
        </OverlayTrigger>
        <MessagesModal {... this.props} show={this.state.lgShow} onHide={lgClose} />
      </span>
    );
  }
});

export const Messages = React.createClass({
  getInitialState() {
    return {
      lgShow: false,
      new: true
    };
  },
  componentDidMount(){
    this.loadFromServer();
  },
  loadFromServer(){

  },
  render() {
    let lgClose = () => this.setState({ lgShow: false });

    return (
      <div></div>
    );
  }
});
