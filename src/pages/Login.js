import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actSubmitUserEmail } from '../redux/actions';

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

  handleValidation = ({ target }) => {
    // console.log(target);

    if (target.id === 'user_email') {
      this.setState((prevState) => ({
        user: {
          ...prevState.user,
          email: target.value,
        },
      }));
    }

    if (target.id === 'user_password') {
      this.setState((prevState) => ({
        user: {
          ...prevState.user,
          password: target.value,
        },
      }));
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { user } = this.state;
    const { history, dispatch } = this.props;
    dispatch(actSubmitUserEmail(user.email));
    history.push('/carteira');
  };

  render() {
    // console.log(store.getState());
    const { user } = this.state;
    const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    const passwordRegex = /^(?=.{6,})/;
    const disable = user.email.toLowerCase().match(emailRegex)
    && user.password.match(passwordRegex);
    return (
      <div>
        <form>
          <label htmlFor="user-email">
            Email:
            <input
              type="email"
              name="user-email"
              id="user_email"
              placeholder="Email"
              // value='test@test.com'
              data-testid="email-input"
              onChange={ this.handleValidation }
            />
          </label>
          <label htmlFor="user_password">
            Senha:
            <input
              type="text"
              name="user_password"
              id="user_password"
              placeholder="Senha"
              data-testid="password-input"
              onChange={ this.handleValidation }
            />
          </label>
          <button
            type="submit"
            disabled={ !disable }
            onClick={ this.handleSubmit }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape([]).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(null)(Login);
