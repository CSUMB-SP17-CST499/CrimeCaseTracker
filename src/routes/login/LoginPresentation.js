import React, { PropTypes } from 'react';
// import { Panel, Input, Button } from 'react-bootstrap';
import Button from 'react-bootstrap/lib/Button';
import Panel from 'react-bootstrap/lib/Panel';
import { FormControl, Checkbox } from 'react-bootstrap';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Login.css';
import history from '../../core/history';

//import sequelize from '../../data/sequelize';

const LoginForm =({
  onSubmit,
  onChange,
  errors,
  user
}) => (
      <div className="col-md-4 col-md-offset-4">
        <div className="text-center">
          <h1 className="login-brand-text">SB Admin React</h1>
          <h3 className="text-muted">Created by <a href="http://startreact.com">StartReact.com</a> team</h3>
        </div>
        
        <Panel header={<h3>Please Sign In</h3>} className="login-panel">
          {errors.summary && <p className="error-message">{errors.summary}</p>}
          <form role="form" onSubmit={onSubmit}>
            <fieldset>
              <div className="form-group">
                <FormControl
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  name="username"
                  onChange={onChange}
                  value={user.username}
                />
              </div>
              
              <div className="form-group">
                <FormControl
                  className="form-control"
                  placeholder="Password"
                  type="password"
                  name="password"
                  onChange={onChange}
                  value={user.password}
                />
              </div>
              <Checkbox label="Remember Me" > Remember Me </Checkbox>
              <Button type="submit" bsSize="large" bsStyle="success" block>Login</Button>
            </fieldset>
          </form>
        
        </Panel>
      
      </div>
    
);

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default withStyles(s)(LoginForm);
