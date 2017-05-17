/**
 * Created by Red-8 on 4/27/2017.
 */
import React, { Component } from 'react';
import { Button, Modal, ButtonToolbar, OverlayTrigger, Tooltip } from 'react-bootstrap';

export const MessagesModal = React.createClass({
  onClose(){
    this.props.onHide();
  },
  render() {
    let messages = this.props.messages;
    return (
      <Modal {...this.props} bsSize="small" aria-labelledby="contained-modal-title-lg">
        <Modal.Header>
          <h3>Messages ({this.props.caseNumber})</h3>
        </Modal.Header>

        <Modal.Body>
          {
            messages.map((message, i) => {
              return <Message key={i} id={i} {... message} />
            })
          }
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

    //change color to this.props.new to change color based on new message
    if (this.props.hideMessages){
      return <span></span>
    }

    return (
      <span style={{"float": "right"}}>
        <OverlayTrigger placement="left" overlay={
          <Tooltip><strong>Messages</strong></Tooltip>}>
          <span style={{"color": "black", "cursor": "pointer"}}
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
  render() {
    let lgClose = () => this.setState({ lgShow: false });
    return (
      <div></div>
    );
  }
});

export const Message = React.createClass({
  render() {
    return (
      <div>
        <b>{this.props.comment}</b>
        <br />
        <i>{new Date(this.props.commentDate).toLocaleDateString() +
        " (" + new Date(this.props.commentDate).toLocaleTimeString() + ")" }
        </i>
        <hr />
      </div>
    );
  }
});
