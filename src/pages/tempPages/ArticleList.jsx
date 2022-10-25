import React from 'react'
import { Link } from 'react-router-dom'
import ListContainer from '../../containers/ListContainer/ListContainer'

const ArticleList = () => {
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
          thumbnail:
            "https://firebasestorage.googleapis.com/v0/b/ecf-future-hub.appspot.com/o/cv-pic.jpg?alt=media&token=8f649302-9820-426d-80f2-2337e970fc71",
          title: "Test title one",
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
          category: "Finance",
          date: "23 May 2022",
          id: 2,
          isActive: false,
          readTime: "5 mins",
          thumbnail:
            "https://firebasestorage.googleapis.com/v0/b/ecf-future-hub.appspot.com/o/cv-pic.jpg?alt=media&token=8f649302-9820-426d-80f2-2337e970fc71",
          title: "Test title two",
        },
      ];

    return (
        <div>
            <ListContainer title="Article" data={data} />
            <p>ArticleList</p>
            <Link to="/addarticle" >Add article  </Link>
            <Link to="singlearticle" >Article title</Link>
        </div>
    )
}

export default ArticleList