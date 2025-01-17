import { render, screen, fireEvent } from "@testing-library/react";
import Home from "./Home";

describe("Home Component", () => {

  test("shows the button texts", () => {
    render(<Home />);
    expect(screen.getByText(/THROWS/i)).toBeInTheDocument();
    expect(screen.getByText(/STATS/i)).toBeInTheDocument();
    expect(screen.getByText(/INFO/i)).toBeInTheDocument();
    expect(screen.getByText(/ACTIONS/i)).toBeInTheDocument();
    expect(screen.getByText(/LEVEL UP/i)).toBeInTheDocument();
    expect(screen.getByText(/DELETE/i)).toBeInTheDocument();
  });

  test("go to new page", () => {
    render(<Home />);
    const addButton = screen.getByAltText(/new/i);
    fireEvent.click(addButton);
  })

});
