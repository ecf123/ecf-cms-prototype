import IndexContainer from "../../containers/IndexContainer/IndexContainer"

const ArticleIndex = () => {

    const articleData = {
        heading: "Want a winning CV? Folow these 8 tips",
        image: "https://firebasestorage.googleapis.com/v0/b/ecf-future-hub.appspot.com/o/cv-pic.jpg?alt=media&token=8f649302-9820-426d-80f2-2337e970fc71",
        date: "23 May 2022",
        overview: "Lorem ipsum dolor sit amet. Id earum enim eum maxime nihil eos commodi quisquam non amet magnam eum sunt voluptatem et laborum magni. Et odio quas aut quam modi ea beatae officia eos quidem internos! Est quidem maiores in itaque earum eos incidunt voluptatibus cum obcaecati consequuntur ea accusantium animi est voluptatem omnis aut voluptatem distinctio. Qui corrupti voluptatem ea asperiores quod non fugiat nihil aut iste pariatur qui porro natus? Ut velit doloribus ut officia impedit repellendus reprehenderit in nisi asperiores. Est doloremque error ab esse enim et nesciunt quasi qui ipsa atque. In illo fugit qui provident cupiditate ut molestias odio in repudiandae eligendi est commodi quia. Qui dolorem iste eum voluptatum sint non error doloribus? Ut totam velit rem voluptatem amet qui natus doloribus id numquam odio sed similique vitae et quod officia. Hic repellat magni et fuga pariatur est itaque sint.",
        links: "Engineering",
        condition: true,
      };

      const optionsData = {
        title: "More",
        description: "tinctio quo commodi, sequi non itaque corporis delectus magnam reprehenderit, qui voluptatum excepturi quos inventore illum laboriosam illo est exercitationem maxime impedit"
      }
  return (
    <IndexContainer data={articleData} optionsData={optionsData} title="Article Index" />
  )
}

export default ArticleIndex