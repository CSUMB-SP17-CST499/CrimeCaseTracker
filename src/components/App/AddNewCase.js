import React, { Component } from 'react';
import { Button, Modal, ButtonToolbar, FormGroup, ControlLabel, FormControl, HelpBlock, Checkbox, Radio } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import Autocomplete from 'react-google-autocomplete';

export const MySmallModal = React.createClass({
  render() {
    return (
      <Modal {...this.props} bsSize="small" aria-labelledby="contained-modal-title-sm">
        <Modal.Header closeButton>
    ; <Modal.Title id="contained-modal-title-sm">Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Wrapped Text</h4>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
});

export const MyLargeModal = React.createClass({

  render() {
    return (
      <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">Enter case information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Wrapped Text</h4>
          <div class="form-group">
            <Autocomplete
              style={{width: '90%'}}
              onPlaceSelected={(place) => {
                console.log(place);
              }}
              types={['(regions)']}
              componentRestrictions={{country: "us"}}
            />
            <label>Case Number: </label>
            <input type="text" class="form-control" placeholder="Enter Case #" name="caseNumber"/>
          </div>
          <div>
            <label>Test form: </label>
            <formInstance />
          </div>
          <div class="form-group">
            <label>Crime: </label>
            <input type="text" class="form-control" placeholder="Enter Crime" name="crime"/>
          </div>
          <div class="form-group">
            <label>Location: </label>
            <input type="text" class="form-control" placeholder="Enter Location" id="location"/>
          </div>
          <div class="form-group">
            <label>Reporting Party: </label>
            <input type="text" class="form-control" placeholder="Enter Reporting Party" name="reportingParty"/>
          </div>
          <div class="form-group">
            <label>Victim: </label>
            <input type="text" class="form-control" placeholder="Enter Victim" name="victim"/>
          </div>
          <div class="form-group">
            <label>Suspect: </label>
            <input type="text" class="form-control" placeholder="Enter Suspect" name="suspect"/>
          </div>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
          <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
          <Button onClick={this.props.onHide}>Save</Button>
        </Modal.Footer>
      </Modal>
    );
  }
});

export const ModalApp = React.createClass({
  getInitialState() {
    return { smShow: false, lgShow: false };
  },
  render() {
    let smClose = () => this.setState({ smShow: false });
    let lgClose = () => this.setState({ lgShow: false });

    return (
      <ButtonToolbar id="addCase">
        <Button bsStyle="primary" onClick={()=>this.setState({ lgShow: true })}>
          Add new case
        </Button>

        <MySmallModal show={this.state.smShow} onHide={smClose} />
        <MyLargeModal show={this.state.lgShow} onHide={lgClose} />
      </ButtonToolbar>
    );
  }
});

export const SearchBox = React.createClass({
  buttonClick: function() {
    alert(this.refs.searchField.getDOMNode().value);
  },
  render: function() {
    return (
      <div>
        <label htmlFor="searchTextField">
          Please Insert an address:
        </label>
        <br/>
        <input ref='searchField' id="searchTextField" type="text" size="50"/>
        <br/>
        <button onClick={this.buttonClick}>Submit</button>
      </div>
    );
  }
});

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

export const formInstance = (
  <form>
    <FieldGroup
      id="formControlsText"
      type="text"
      label="Text"
      placeholder="Enter text"
    />
    <FieldGroup
      id="formControlsEmail"
      type="email"
      label="Email address"
      placeholder="Enter email"
    />
    <FieldGroup
      id="formControlsPassword"
      label="Password"
      type="password"
    />
    <FieldGroup
      id="formControlsFile"
      type="file"
      label="File"
      help="Example block-level help text here."
    />

    <Checkbox checked readOnly>
      Checkbox
    </Checkbox>
    <Radio checked readOnly>
      Radio
    </Radio>

    <FormGroup>
      <Checkbox inline>
        1
      </Checkbox>
      {' '}
      <Checkbox inline>
        2
      </Checkbox>
      {' '}
      <Checkbox inline>
        3
      </Checkbox>
    </FormGroup>
    <FormGroup>
      <Radio inline>
        1
      </Radio>
      {' '}
      <Radio inline>
        2
      </Radio>
      {' '}
      <Radio inline>
        3
      </Radio>
    </FormGroup>

    <FormGroup controlId="formControlsSelect">
      <ControlLabel>Select</ControlLabel>
      <FormControl componentClass="select" placeholder="select">
        <option value="select">select</option>
        <option value="other">...</option>
      </FormControl>
    </FormGroup>
    <FormGroup controlId="formControlsSelectMultiple">
      <ControlLabel>Multiple select</ControlLabel>
      <FormControl componentClass="select" multiple>
        <option value="select">select (multiple)</option>
        <option value="other">...</option>
      </FormControl>
    </FormGroup>

    <FormGroup controlId="formControlsTextarea">
      <ControlLabel>Textarea</ControlLabel>
      <FormControl componentClass="textarea" placeholder="textarea" />
    </FormGroup>

    <FormGroup>
      <ControlLabel>Static text</ControlLabel>
      <FormControl.Static>
        email@example.com
      </FormControl.Static>
    </FormGroup>

    <Button type="submit">
      Submit
    </Button>
  </form>
);
