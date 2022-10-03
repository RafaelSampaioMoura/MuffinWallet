import React, { Component } from "react";
import { connect } from "react-redux";
import { fecthCurrencyInfo } from "../redux/actions";
// import { fetchCurrencyInfo } from "../redux/actions";
// import getCurrencyInfo from "../services/walletAPI";
import Loading from "./Loading";
import "./WalletForm.css";

class WalletForm extends Component {
  componentDidMount() {
    const { currencies, dispatch } = this.props;
    dispatch(fecthCurrencyInfo());
    // console.log(currencies);
  }
  render() {
    const { currencies, isFetching } = this.props;
    // console.log(currencies);
    return (
      <>
        <form className='wallet-form'>
          <label htmlFor='value-input'>
            Valor:{" "}
            <input
              type='number'
              name='value-input'
              id='value-input'
              data-testid='value-input'
            />
          </label>
          <label htmlFor='description-input'>
            Descrição:{" "}
            <input
              type='text'
              name='description-input'
              id='description-input'
              data-testid='description-input'
            />
          </label>
          <label htmlFor='currency-input'>
            Câmbio:
            <select
              name='currency-input'
              id='currency-input'
              data-testid='currency-input'
            >
              {isFetching ? (
                <Loading />
              ) : (
                currencies.map((currency) => {
                  return (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  );
                })
              )}
            </select>
          </label>
          <label htmlFor='method-input'>
            Método:
            <select
              name='method-input'
              id='method-input'
              data-testid='method-input'
            >
              <option value='dinheiro'>Dinheiro</option>
              <option value='cartao-de-credito'>Cartão de crédito</option>
              <option value='cartao-de-debito'>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor='tag-input'>
            Tipo:
            <select name='tag-input' id='tag-input' data-testid='tag-input'>
              <option value='alimentacao'>Alimentação</option>
              <option value='lazer'>Lazer</option>
              <option value='trabalho'>Trabalho</option>
              <option value='transporte'>Transporte</option>
              <option value='saude'>Saúde</option>
            </select>
          </label>
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currencies: state.wallet.currencies,
    isFetching: state.wallet.isFetching,
  };
};

export default connect(mapStateToProps, null)(WalletForm);
