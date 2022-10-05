import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithRouterAndRedux } from "./helpers/renderWith";
import App from "../App";

describe("Testes página login", () => {
//   const loginHeader = screen.getByRole("heading");
//   const emailInput = screen.getByPlaceholderText(/Email/i);
//   const passwordInput = screen.getByPlaceholderText(/Senha/i);
//   const entrarBtn = screen.getByRole("button");
  test("Renderiza formulário", () => {
    renderWithRouterAndRedux(<App />);
    const loginHeader = screen.getByRole("heading");
    const emailInput = screen.getByPlaceholderText(/Email/i);
    const passwordInput = screen.getByPlaceholderText(/Senha/i);
    const entrarBtn = screen.getByRole("button");

    expect(loginHeader).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(entrarBtn).toBeInTheDocument();
  });

  test("Muda para a carteira", () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const emailInput = screen.getByPlaceholderText(/Email/i);
    const passwordInput = screen.getByPlaceholderText(/Senha/i);
    const entrarBtn = screen.getByRole("button");

    userEvent.type(emailInput, "test@test.com");
    userEvent.type(passwordInput, "123456");
    userEvent.click(entrarBtn);

    const { location } = history;

    expect(location.pathname).toBe("/carteira");
  });
});
