import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        email: '',
        password: '',
      },
    };
  }

  handleValidation = ({ target }) => {};

  render() {
    return (
      <div>
        <form>
          <label htmlFor='user-email'>
            <input
              type='email'
              name='user-email'
              id='user_email'
              data-testid='email-input'
              onChange={this.handleValidation}
            />
          </label>
          <label htmlFor='user_password'>
            <input
              type='text'
              name='user_password'
              id='user_password'
              data-testid='password-input'
              onChange={this.handleValidation}
            />
          </label>
        </form>
      </div>
    );
  }
}

export default Login;
