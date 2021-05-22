import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders toolheader", () => {
  render(<App />);
  const h1Element = screen.getByText(/React Web App/i);
  expect(h1Element).toBeInTheDocument();
});

test("renders button", () => {
  render(<App />);
  const buttonElement = screen.getByText(/Click me!/i);
  expect(buttonElement).toBeInTheDocument();
});
