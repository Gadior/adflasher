import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AuthPromo from "./AuthPromo";

jest.mock("lucide-react", () => ({
  X: () => <div>Mocked X Icon</div>,
}));
// _
test("Компонент AuthPromo", () => {
  render(<AuthPromo />);
  expect(screen.getByTestId("singIncomp")).toBeInTheDocument();
});
