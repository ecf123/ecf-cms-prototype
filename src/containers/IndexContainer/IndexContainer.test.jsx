import { customRender } from "../../utils/testUtils";
import IndexContainer from "./IndexContainer";

it("Should match the snapshot", () => {
    const { container } = customRender(
      <IndexContainer articleData={"articleData"} optionsData={"OptionsData"} handleEdit={"handleEdit"} handleDelete={"handleDelete"} />
    );
    expect(container).toMatchSnapshot();
  });