import ListContainer from '../../containers/ListContainer/ListContainer'
import forHire from "../../assets/for-hire-image.svg";
import manInSuit from "../../assets/man-in-suit.svg";
import laptop from "../../assets/laptop-with-code.svg";

const Articles = () => {

  const data = [
    {
      articleContent: [
        {
          heading: "Heading 1",
          paragraph:
            "Lorem ipsum dolor sit amet. Id earum enim eum maxime nihil eos commodi quisquam non amet magnam eum sunt voluptatem et laborum magni. Et odio quas aut quam modi ea beatae officia eos quidem internos! Est quidem maiores in itaque earum eos incidunt voluptatibus cum obcaecati consequuntur ea accusantium animi est voluptatem omnis aut voluptatem distinctio. Qui corrupti voluptatem ea asperiores quod non fugiat nihil aut iste pariatur qui porro natus? Ut velit doloribus ut officia impedit repellendus reprehenderit in nisi asperiores. Est doloremque error ab esse enim et nesciunt quasi qui ipsa atque. In illo fugit qui provident cupiditate ut molestias odio in repudiandae eligendi est commodi quia. Qui dolorem iste eum voluptatum sint non error doloribus? Ut totam velit rem voluptatem amet qui natus doloribus id numquam odio sed similique vitae et quod officia. Hic repellat magni et fuga pariatur est itaque sint.",
        },
        {
          heading: "Heading 1",
          paragraph:
            "Lorem ipsum dolor sit amet. Id earum enim eum maxime nihil eos commodi quisquam non amet magnam eum sunt voluptatem et laborum magni. Et odio quas aut quam modi ea beatae officia eos quidem internos! Est quidem maiores in itaque earum eos incidunt voluptatibus cum obcaecati consequuntur ea accusantium animi est voluptatem omnis aut voluptatem distinctio. Qui corrupti voluptatem ea asperiores quod non fugiat nihil aut iste pariatur qui porro natus? Ut velit doloribus ut officia impedit repellendus reprehenderit in nisi asperiores. Est doloremque error ab esse enim et nesciunt quasi qui ipsa atque. In illo fugit qui provident cupiditate ut molestias odio in repudiandae eligendi est commodi quia. Qui dolorem iste eum voluptatum sint non error doloribus? Ut totam velit rem voluptatem amet qui natus doloribus id numquam odio sed similique vitae et quod officia. Hic repellat magni et fuga pariatur est itaque sint.",
        },
      ],
      category: "Finance",
      date: "23 May 2022",
      id: 2,
      isActive: false,
      readTime: "5 mins",
      thumbnail: forHire,
      title: "Want a winning CV? Folow these 5 tips",
    },
    {
      articleContent: [
        {
          heading: "Heading 1",
          paragraph:
            "Lorem ipsum dolor sit amet. Id earum enim eum maxime nihil eos commodi quisquam non amet magnam eum sunt voluptatem et laborum magni. Et odio quas aut quam modi ea beatae officia eos quidem internos! Est quidem maiores in itaque earum eos incidunt voluptatibus cum obcaecati consequuntur ea accusantium animi est voluptatem omnis aut voluptatem distinctio. Qui corrupti voluptatem ea asperiores quod non fugiat nihil aut iste pariatur qui porro natus? Ut velit doloribus ut officia impedit repellendus reprehenderit in nisi asperiores. Est doloremque error ab esse enim et nesciunt quasi qui ipsa atque. In illo fugit qui provident cupiditate ut molestias odio in repudiandae eligendi est commodi quia. Qui dolorem iste eum voluptatum sint non error doloribus? Ut totam velit rem voluptatem amet qui natus doloribus id numquam odio sed similique vitae et quod officia. Hic repellat magni et fuga pariatur est itaque sint.",
        },
        {
          heading: "Heading 1",
          paragraph:
            "Lorem ipsum dolor sit amet. Id earum enim eum maxime nihil eos commodi quisquam non amet magnam eum sunt voluptatem et laborum magni. Et odio quas aut quam modi ea beatae officia eos quidem internos! Est quidem maiores in itaque earum eos incidunt voluptatibus cum obcaecati consequuntur ea accusantium animi est voluptatem omnis aut voluptatem distinctio. Qui corrupti voluptatem ea asperiores quod non fugiat nihil aut iste pariatur qui porro natus? Ut velit doloribus ut officia impedit repellendus reprehenderit in nisi asperiores. Est doloremque error ab esse enim et nesciunt quasi qui ipsa atque. In illo fugit qui provident cupiditate ut molestias odio in repudiandae eligendi est commodi quia. Qui dolorem iste eum voluptatum sint non error doloribus? Ut totam velit rem voluptatem amet qui natus doloribus id numquam odio sed similique vitae et quod officia. Hic repellat magni et fuga pariatur est itaque sint.",
        },
      ],
      category: "Career",
      date: "23 May 2022",
      id: 2,
      isActive: false,
      readTime: "5 mins",
      thumbnail: manInSuit,
      title: "5 most in-demand jobs in 2022",
    },{
      articleContent: [
        {
          heading: "Heading 1",
          paragraph:
            "Lorem ipsum dolor sit amet. Id earum enim eum maxime nihil eos commodi quisquam non amet magnam eum sunt voluptatem et laborum magni. Et odio quas aut quam modi ea beatae officia eos quidem internos! Est quidem maiores in itaque earum eos incidunt voluptatibus cum obcaecati consequuntur ea accusantium animi est voluptatem omnis aut voluptatem distinctio. Qui corrupti voluptatem ea asperiores quod non fugiat nihil aut iste pariatur qui porro natus? Ut velit doloribus ut officia impedit repellendus reprehenderit in nisi asperiores. Est doloremque error ab esse enim et nesciunt quasi qui ipsa atque. In illo fugit qui provident cupiditate ut molestias odio in repudiandae eligendi est commodi quia. Qui dolorem iste eum voluptatum sint non error doloribus? Ut totam velit rem voluptatem amet qui natus doloribus id numquam odio sed similique vitae et quod officia. Hic repellat magni et fuga pariatur est itaque sint.",
        },
        {
          heading: "Heading 1",
          paragraph:
            "Lorem ipsum dolor sit amet. Id earum enim eum maxime nihil eos commodi quisquam non amet magnam eum sunt voluptatem et laborum magni. Et odio quas aut quam modi ea beatae officia eos quidem internos! Est quidem maiores in itaque earum eos incidunt voluptatibus cum obcaecati consequuntur ea accusantium animi est voluptatem omnis aut voluptatem distinctio. Qui corrupti voluptatem ea asperiores quod non fugiat nihil aut iste pariatur qui porro natus? Ut velit doloribus ut officia impedit repellendus reprehenderit in nisi asperiores. Est doloremque error ab esse enim et nesciunt quasi qui ipsa atque. In illo fugit qui provident cupiditate ut molestias odio in repudiandae eligendi est commodi quia. Qui dolorem iste eum voluptatum sint non error doloribus? Ut totam velit rem voluptatem amet qui natus doloribus id numquam odio sed similique vitae et quod officia. Hic repellat magni et fuga pariatur est itaque sint.",
        },
      ],
      category: "Professional Development",
      date: "23 May 2022",
      id: 2,
      isActive: false,
      readTime: "5 mins",
      thumbnail: laptop,
      title: "My journey from a Future Hub user to Web Developer",
    }
  ];


  return (
    <ListContainer title="Article" data={data} />
  )
}

export default Articles