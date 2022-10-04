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
  render(<SearchBar placeholderText={"placeHolderText"}/>)

  const input = screen.getByPlaceholderText("placeHolderText");
  userEvent.type(input, "financial forrest")

  const updatedInput = screen.findByText("financial forrest");
  expect(updatedInput).toBeTruthy();
});


it("Should not display the wrong order of characters based on what was typed", () => {
    render(<SearchBar placeholderText={"placeHolderText"}/>)
  
    const input = screen.getByPlaceholderText("placeHolderText");
    userEvent.type(input, "financial forrest")
  
    const updatedInput = screen.queryByText("forrest financial");
    expect(updatedInput).toBeFalsy();
  });

  it("Should render in the search bubble", () => {
    render(<SearchBar placeholderText={"placeHolderText"}/>)
  
    const input = screen.getByPlaceholderText("placeHolderText");
  
    expect(input).toBeInTheDocument();
  });