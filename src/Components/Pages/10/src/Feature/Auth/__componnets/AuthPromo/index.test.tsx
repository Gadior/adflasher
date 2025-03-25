import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AuthPromo from "./AuthPromo";
import userEvent from "@testing-library/user-event";

jest.mock("lucide-react", () => ({
  X: () => <div>Mocked X Icon</div>,
}));
// _

test("Компонент AuthPromo", () => {
  render(<AuthPromo />);
  expect(screen.getByTestId("singIn")).toBeInTheDocument();
});

test("Нажатие на крестик у singIn", async () => {
  render(<AuthPromo />);

  const __btn = screen.getByTestId("btn_singIn");

  await userEvent.click(__btn);

  expect(screen.queryByTestId("singIn")).not.toBeInTheDocument();
});
