import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWith';
import App from '../App';

describe('Testes página Wallet', () => {
  test('Renderiza Header corretamente', () => {
    renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'] });

    const banner = screen.getByText('TRYBE WALLET');
    const emailHead = screen.getByTestId('email-field');
    const expenseHead = screen.getByTestId('total-field');
    const currencyHead = screen.getByTestId('header-currency-field');

    expect(banner).toBeInTheDocument();
    expect(emailHead).toBeInTheDocument();
    expect(expenseHead).toBeInTheDocument();
    expect(currencyHead).toBeInTheDocument();
  });

  test('Renderiza WalletForm corretamente', async () => {
    renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'] });

    const inputExpense = screen.getByTestId('value-input');
    const inputDescrition = screen.getByTestId('description-input');
    const inputCurrency = await screen.findByTestId('currency-input');
    const inputMethod = screen.getByTestId('method-input');
    const inputTag = screen.getByTestId('tag-input');
    const addBtn = screen.getByRole('button', { name: 'Adicionar despesa' });

    expect(inputExpense).toBeInTheDocument();
    expect(inputDescrition).toBeInTheDocument();
    expect(inputCurrency).toBeInTheDocument();
    expect(inputMethod).toBeInTheDocument();
    expect(inputTag).toBeInTheDocument();
    expect(addBtn).toBeInTheDocument();
  });

  test('Renderiza Table corretamente', async () => {
    renderWithRouterAndRedux(<App />, { initialEntries: ['/carteira'] });

    const inputExpense = screen.getByTestId('value-input');
    const inputDescrition = screen.getByTestId('description-input');
    const inputCurrency = await screen.findByTestId('currency-input');
    const inputMethod = screen.getByTestId('method-input');
    const inputTag = screen.getByTestId('tag-input');
    const addBtn = screen.getByRole('button', { name: 'Adicionar despesa' });

    // console.log(inputCurrency);

    userEvent.type(inputExpense, '5');
    userEvent.type(inputDescrition, 'Abloogie-Wooglie-Woo');
    userEvent.selectOptions(inputCurrency, 'USD');
    userEvent.selectOptions(inputMethod, 'Dinheiro');
    userEvent.selectOptions(inputTag, 'Saúde');
    userEvent.click(addBtn);

    const rowDescription = await screen.findByRole('cell', { name: 'Abloogie-Wooglie-Woo' });
    // console.log(rowDescription);
    const rowTag = await screen.findByRole('cell', { name: 'Saúde' });
    // console.log(rowTag);
    const rowMethod = await screen.findByRole('cell', { name: 'Dinheiro' });
    const rowExpense = await screen.findByRole('cell', { name: '5.00' });
    const rowCurrency = await screen.findByRole('cell', { name: 'Dólar Americano/Real Brasileiro' });
    const rowCurrencyPayment = await screen.findByRole('cell', { name: 'Real' });
    const editBtn = await screen.findByRole('button', { name: 'Editar' });
    // console.log(editBtn);
    const deleteBtn = await screen.findByRole('button', { name: 'Excluir' });

    expect(rowDescription).toBeInTheDocument();
    expect(rowTag).toBeInTheDocument();
    expect(rowMethod).toBeInTheDocument();
    expect(rowExpense).toBeInTheDocument();
    expect(rowCurrency).toBeInTheDocument();
    expect(rowCurrencyPayment).toBeInTheDocument();
    expect(editBtn).toBeInTheDocument();
    expect(deleteBtn).toBeInTheDocument();

    userEvent.click(editBtn);

    const editFormBtn = await screen.findByRole('button', { name: 'Editar despesa' });
    expect(editFormBtn).toBeInTheDocument();

    userEvent.type(inputExpense, '10');
    userEvent.type(inputDescrition, 'Kamehameha');
    // userEvent.selectOptions(inputCurrency, 'CAD');
    userEvent.selectOptions(inputMethod, 'Cartão de crédito');
    userEvent.selectOptions(inputTag, 'Trabalho');
    userEvent.click(editFormBtn);

    expect(rowDescription.textContent).toBe('Kamehameha');
    expect(rowTag.textContent).toBe('Trabalho');
    expect(rowMethod.textContent).toBe('Cartão de crédito');
    expect(rowExpense.textContent).toBe('10.00');
    // expect(rowCurrency.textContent).toBe('Dólar Canadense/Real Brasileiro');
    expect(rowCurrencyPayment.textContent).toBe('Real');

    userEvent.click(deleteBtn);

    const allRow = screen.queryAllByRole('cell');

    expect(allRow.length).toBe(0);
  });
});
