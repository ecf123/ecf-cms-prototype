import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBar from "../SearchBar/SearchBar.jsx";

import { customRender } from "../../utils/testUtils";

it("Should render searchbar with children", () => {
  const { container } = customRender(
    <SearchBar>
      <p>some content</p>
    </SearchBar>
  );
  expect(container).toMatchSnapshot();
});


it("Should update input box with each key press", () => {
  render(<SearchBar />)

  const input = screen.getByTestId("search-input");
  userEvent.type(input, "financial forrest")

  const updatedInput = screen.findByText("financial forrest");
  expect(updatedInput).toBeTruthy();
});


it("Should not display the wrong order of characters based on what was typed", () => {
    render(<SearchBar />)
  
    const input = screen.getByTestId("search-input");
    userEvent.type(input, "financial forrest")
  
    const updatedInput = screen.queryByText("forrest financial");
    expect(updatedInput).toBeFalsy();
  });

  it("Should render in the search bubble", () => {
    render(<SearchBar />)
  
    const input = screen.getByTestId("search-input");
  
    expect(input).toBeInTheDocument();
  });