import { customRender } from "../../utils/testUtils";
import PrizeContainer from "./PrizeContainer";

it("Should match the snapshot", () => {
    const { container } = customRender(
      <PrizeContainer articleData={"prizeData"} optionsData={"optionsData"} handleEdit={"handleEdit"} handleDelete={"handleDelete"} />
    );
    expect(container).toMatchSnapshot();
  });