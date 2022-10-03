import getCurrencyInfo from "../../services/walletAPI";

// Coloque aqui suas actions
export const SUBMIT_USER_EMAIL = "SUBMIT_USER_EMAIL";

export const REQUEST_CURRENCY_INFORMATION = "REQUEST_CURRENCY_INFORMATION";
export const RECEIVE_CURRENCY_INFORMATION = "RECEIVE_CURRENCY_INFORMATION";
export const FAILED_CURRENCY_INFORMATION = "FAILED_CURRENCY_INFORMATION";

export const actSubmitUserEmail = (payload) => ({
  type: SUBMIT_USER_EMAIL,
  payload,
});

const requestCurrencyInfo = () => ({
  type: REQUEST_CURRENCY_INFORMATION,
});

const successCurrencyInfo = (payload) => ({
  type: RECEIVE_CURRENCY_INFORMATION,
  currencies: Object.keys(payload).filter((currency) => currency !== "USDT"),
});

const failureCurrencyInfo = (errorMessage) => ({
  type: FAILED_CURRENCY_INFORMATION,
  error: errorMessage,
});

export const fecthCurrencyInfo = () => async (dispatch) => {
  dispatch(requestCurrencyInfo());

  try {
    const response = await getCurrencyInfo();
    // console.log(response);
    dispatch(successCurrencyInfo(response));
  } catch (error) {
    const errorAction = failureCurrencyInfo(error);
    dispatch(errorAction);
  }
};
