// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import {
  REQUEST_CURRENCY_INFORMATION,
  RECEIVE_CURRENCY_INFORMATION,
  FAILED_CURRENCY_INFORMATION,
  RECEIVE_EXPENSE_INFORMATION,
  FAILURE_EXPENSE_INFORMATION,
} from "../actions";
import INITIAL_STATE from "./initialState";

const wallet = (state = INITIAL_STATE.wallet, action) => {
  switch (action.type) {
    case REQUEST_CURRENCY_INFORMATION:
      return {
        ...state,
        isFetching: true,
      };
    case RECEIVE_CURRENCY_INFORMATION:
      return {
        ...state,
        currencies: action.currencies,
        isFetching: false,
      };
    case FAILED_CURRENCY_INFORMATION:
      return {
        ...state,
        error: action.error,
        isFetching: false,
      };
    case RECEIVE_EXPENSE_INFORMATION:
      return {
        ...state,
        expenses: [...state.expenses, action.expenses],
        isFetching: false,
      };
    case FAILURE_EXPENSE_INFORMATION:
      return {
        ...state,
        error: action.error,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default wallet;
