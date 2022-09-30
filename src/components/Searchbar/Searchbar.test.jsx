import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Searchbar from "./Searchbar";

it("Should update input box with each key press", () => {
  render(<Searchbar />)

  const input = screen.getByTestId("search-input");
  userEvent.type(input, "financial forrest")

  const updatedInput = screen.findByText("financial forrest");
  expect(updatedInput).toBeTruthy();
});


it("Should not display the wrong order of characters based on what was typed", () => {
    render(<Searchbar />)
  
    const input = screen.getByTestId("search-input");
    userEvent.type(input, "financial forrest")
  
    const updatedInput = screen.queryByText("forrest financial");
    expect(updatedInput).toBeFalsy();
  });

  it("Should render in the search bubble", () => {
    render(<Searchbar />)
  
    const input = screen.getByTestId("search-input");
  
    expect(input).toBeInTheDocument();
  });