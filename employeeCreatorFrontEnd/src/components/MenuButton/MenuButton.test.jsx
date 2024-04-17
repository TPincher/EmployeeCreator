import { render, screen } from "@testing-library/react";
import MenuButton from "./MenuButton";
import ModeContextProvider from "../../context/ModeContext";

describe("MenuButton tests", () => {
  it("should render a button", () => {
    render(
      <ModeContextProvider>
        <MenuButton />
      </ModeContextProvider>
    );
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
