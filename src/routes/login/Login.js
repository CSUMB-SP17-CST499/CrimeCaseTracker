import React, { PropTypes } from 'react';
// import { Panel, Input, Button } from 'react-bootstrap';
import LoginForm from './LoginPresentation';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Login.css';
import history from '../../core/history';

//import sequelize from '../../data/sequelize';

const title = 'Log In';

class Login extends React.Component {
  constructor(props, context){
    context.setTitle(title);
    super(props, context);
    
    this.state = {
      errors: {},
      user: {
        username: '',
        password: ''
      }
    };
    
    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }
  
  processForm(event) {
    event.preventDefault();
    
    const username = encodeURIComponent(this.state.user.username);
    const password = encodeURIComponent(this.state.user.password);
    const formData = `username=${username}&password=${password}`;
    
    const xhr = new XMLHttpRequest();
    xhr.open('post', '/auth/login');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        //success
        
        //change state
        this.setState({
          errors: {}
        });
        console.log('Login form is valid');
      } else {
        //failure
        
        //compoent state
        const errors = xhr.response.errors ? xhr.response.errors : {};
        errors.summary = xhr.response.message;
        
        this.setState({
          errors
        });
      }
    });
    xhr.send(formData);
    
  }
  
  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;
    
    this.setState({
      user
    });
  }
  
//   submitHandler(e) {
//   e.preventDefault();
//
//   history.push('/');
// }

  render() {
    return (
      <LoginForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        user={this.state.user}
      />
    );
  }
}

Login.contextTypes = { setTitle: PropTypes.func.isRequired };

export default withStyles(s)(Login);
