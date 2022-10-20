import ListContainer from "./ListContainer";
import { screen } from "@testing-library/react";
import { customRender } from "../../utils/testUtils";
import image from "../../assets/for-hire-image.svg";
import userEvent from "@testing-library/user-event";

const dataArticles = [{
  articleContent: [
    {
      heading: "Heading 1",
      paragraph: "Lorem ipsum dolor sit amet. Id earum enim eum maxime nihil eos commodi quisquam non amet magnam eum sunt voluptatem et laborum magni. Et odio quas aut quam modi ea beatae officia eos quidem internos! Est quidem maiores in itaque earum eos incidunt voluptatibus cum obcaecati consequuntur ea accusantium animi est voluptatem omnis aut voluptatem distinctio. Qui corrupti voluptatem ea asperiores quod non fugiat nihil aut iste pariatur qui porro natus? Ut velit doloribus ut officia impedit repellendus reprehenderit in nisi asperiores. Est doloremque error ab esse enim et nesciunt quasi qui ipsa atque. In illo fugit qui provident cupiditate ut molestias odio in repudiandae eligendi est commodi quia. Qui dolorem iste eum voluptatum sint non error doloribus? Ut totam velit rem voluptatem amet qui natus doloribus id numquam odio sed similique vitae et quod officia. Hic repellat magni et fuga pariatur est itaque sint."
    },
    {
      heading: "Heading 1",
      paragraph: "Lorem ipsum dolor sit amet. Id earum enim eum maxime nihil eos commodi quisquam non amet magnam eum sunt voluptatem et laborum magni. Et odio quas aut quam modi ea beatae officia eos quidem internos! Est quidem maiores in itaque earum eos incidunt voluptatibus cum obcaecati consequuntur ea accusantium animi est voluptatem omnis aut voluptatem distinctio. Qui corrupti voluptatem ea asperiores quod non fugiat nihil aut iste pariatur qui porro natus? Ut velit doloribus ut officia impedit repellendus reprehenderit in nisi asperiores. Est doloremque error ab esse enim et nesciunt quasi qui ipsa atque. In illo fugit qui provident cupiditate ut molestias odio in repudiandae eligendi est commodi quia. Qui dolorem iste eum voluptatum sint non error doloribus? Ut totam velit rem voluptatem amet qui natus doloribus id numquam odio sed similique vitae et quod officia. Hic repellat magni et fuga pariatur est itaque sint."
    }
  ],
  category: "Finance",
  date: "23 May 2022",
  id: 2,
  isActive: false,
  readTime: "5 mins",
  thumbnail: "https://firebasestorage.googleapis.com/v0/b/ecf-future-hub.appspot.com/o/cv-pic.jpg?alt=media&token=8f649302-9820-426d-80f2-2337e970fc71",
  title: "Test title one"
},{
  articleContent: [
    {
      heading: "Heading 1",
      paragraph: "Lorem ipsum dolor sit amet. Id earum enim eum maxime nihil eos commodi quisquam non amet magnam eum sunt voluptatem et laborum magni. Et odio quas aut quam modi ea beatae officia eos quidem internos! Est quidem maiores in itaque earum eos incidunt voluptatibus cum obcaecati consequuntur ea accusantium animi est voluptatem omnis aut voluptatem distinctio. Qui corrupti voluptatem ea asperiores quod non fugiat nihil aut iste pariatur qui porro natus? Ut velit doloribus ut officia impedit repellendus reprehenderit in nisi asperiores. Est doloremque error ab esse enim et nesciunt quasi qui ipsa atque. In illo fugit qui provident cupiditate ut molestias odio in repudiandae eligendi est commodi quia. Qui dolorem iste eum voluptatum sint non error doloribus? Ut totam velit rem voluptatem amet qui natus doloribus id numquam odio sed similique vitae et quod officia. Hic repellat magni et fuga pariatur est itaque sint."
    },
    {
      heading: "Heading 1",
      paragraph: "Lorem ipsum dolor sit amet. Id earum enim eum maxime nihil eos commodi quisquam non amet magnam eum sunt voluptatem et laborum magni. Et odio quas aut quam modi ea beatae officia eos quidem internos! Est quidem maiores in itaque earum eos incidunt voluptatibus cum obcaecati consequuntur ea accusantium animi est voluptatem omnis aut voluptatem distinctio. Qui corrupti voluptatem ea asperiores quod non fugiat nihil aut iste pariatur qui porro natus? Ut velit doloribus ut officia impedit repellendus reprehenderit in nisi asperiores. Est doloremque error ab esse enim et nesciunt quasi qui ipsa atque. In illo fugit qui provident cupiditate ut molestias odio in repudiandae eligendi est commodi quia. Qui dolorem iste eum voluptatum sint non error doloribus? Ut totam velit rem voluptatem amet qui natus doloribus id numquam odio sed similique vitae et quod officia. Hic repellat magni et fuga pariatur est itaque sint."
    }
  ],
  category: "Finance",
  date: "23 May 2022",
  id: 2,
  isActive: false,
  readTime: "5 mins",
  thumbnail: "https://firebasestorage.googleapis.com/v0/b/ecf-future-hub.appspot.com/o/cv-pic.jpg?alt=media&token=8f649302-9820-426d-80f2-2337e970fc71",
  title: "Test title two"
}
];

const dataMarketplace = [
  {
    heading: "Earn a £5 Amazon Voucher",
    id: 1,
    image: 
    "https://firebasestorage.googleapis.com/v0/b/ecf-future-hub.appspot.com/o/market-place%2Famazon-logo.png?alt=media&token=0c9914b9-b020-421c-acaa-e87ff25be8a0",
    isLocked: false,
    overview:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic placeat quis blanditiis. Debitis placeat sunt, sapiente, a iste repudiandae hic necessitatibus natus inventore maxime, perspiciatis sed distinctio praesentium blanditiis ipsa? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic placeat quis blanditiis. Debitis placeat sunt, sapiente, a iste repudiandae hic necessitatibus natus inventore maxime, perspiciatis sed distinctio praesentium blanditiis ipsa? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic placeat quis blanditiis. Debitis placeat sunt, sapiente, a iste repudiandae hic necessitatibus natus inventore maxime, perspiciatis sed distinctio praesentium blanditiis ipsa?",
    skillPoints: 400,
    trophies: 1
  }
]

it("it should match the snapshot without props", () => {
  const { container } = customRender(<ListContainer />);
  expect(container).toMatchSnapshot();
});

it("it should match the snapshot with props", () => {
  const { container } = customRender(
    <ListContainer data={dataArticles} title="Article" />
  );
  expect(container).toMatchSnapshot();
});

it("it should match the snapshot with props", () => {
  const { container } = customRender(
    <ListContainer data={dataMarketplace} title="Marketplace" />
  );
  expect(container).toMatchSnapshot();
});

it("should render the title on the screen", () => {
  customRender(<ListContainer title="Title" />);
  const title = screen.getByText("Title List");

  expect(title).toBeInTheDocument();
});

it("should render the input box on the screen", () => {
  customRender(<ListContainer />);
  const input = screen.getByRole("textbox");

  expect(input).toBeInTheDocument();
});

it("should render the 'add course' button on the screen", () => {
  customRender(<ListContainer />);
  const button = screen.getByRole("button");

  expect(button).toBeInTheDocument();
});

it("should display the first card only if search 'one'", () => {
  customRender(<ListContainer data={dataArticles} title="Article" />);

  const searchCard1 = screen.getByText("Test title one");
  const searchCard2 = screen.getByText("Test title two");
  const searchBox = screen.getByRole("textbox");

  expect(searchCard1).toBeInTheDocument();
  expect(searchCard2).toBeInTheDocument();

  userEvent.type(searchBox, "one");
  const searchCardFiltered1 = screen.getByText("Test title one");
  const searchCardFiltered2 = screen.queryByText("Test title two");

  expect(searchCardFiltered1).toBeInTheDocument();
  expect(searchCardFiltered2).not.toBeInTheDocument();
});
