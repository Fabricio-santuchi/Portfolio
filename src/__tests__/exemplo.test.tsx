import { render, screen } from "@testing-library/react";

test("o ambiente de testes renderiza um componente", () => {
  render(<h1>Portfólio</h1>);

  expect(
    screen.getByRole("heading", { name: "Portfólio" }),
  ).toBeInTheDocument();
});
