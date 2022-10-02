import React, { Component } from "react";
import { connect } from "react-redux";
import "./Header.css";

class Header extends Component {
  render() {
    console.log(this.props);
    const { email } = this.props;
    return (
      <header>
        <div className="banner">TRYBE WALLET</div>
        <div className="userInfo">
          <div data-testid='email-field'>Email: {email}</div>
          <div data-testid='total-field'>Gastos: 0</div>
          <div data-testid='header-currency-field'>Câmbio: BRL</div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({ email: state.user.email });

export default connect(mapStateToProps, null)(Header);
