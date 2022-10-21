import "./styles/main.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import profile from "./assets/profile-picture.svg";
import Pathways from "./pages/tempPages/Pathways";
import ArticleList from "./pages/tempPages/ArticleList";
import Marketplace from "./pages/tempPages/Marketplace";
import SingleArticle from "./pages/tempPages/SingleArticle";
import AddArticle from "./pages/tempPages/AddArticle";
import AddPrize from "./pages/tempPages/AddPrize";
import { SingleItem } from "./pages/tempPages/SingleItem";
import SinglePathway from "./pages/tempPages/SinglePathway";
import SinglePathwayCourses from "./pages/tempPages/SinglePathwayCourses";
import Course from "./pages/tempPages/Course";
import CourseAddLesson from "./pages/tempPages/CourseAddLesson";
import CourseSingleLesson from "./pages/tempPages/CourseSingleLesson";
import List from "./pages/tempPages/List";

const App = () => {
  const user = {
    image: profile,
    name: "Brett Zieme",
    role: "Admin",
  };

  return (
    <>
      {/* loggedOut && 
    <Routes>
      <Route />
    </Routes> */}
      {
        <Layout user={user}>
          <Routes>

            <Route path="/pathways" element={<Pathways />} />
            <Route path="/pathways/:pathwayName" element={<SinglePathway />} />
            <Route path="/pathways/:pathwayName/courses" element={<SinglePathwayCourses />} />
            <Route
              path="/pathways/:pathwayName/courses/list"
              element={<List />}
            />
            <Route path="/:courseName" element={<Course />} />
            <Route path="/:courseName/addlesson" element={<CourseAddLesson />} />
            <Route
              path="/:courseName/:lessonTitle"
              element={<CourseSingleLesson />}
            />

            <Route path="/articles" element={<ArticleList />} />
            <Route path="/articles/:articleTitle" element={<SingleArticle />} />

            <Route path="/addarticle" element={<AddArticle />} />

            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/addprize" element={<AddPrize />} />
            <Route path="/marketplace/:prizeName" element={<SingleItem />} />

            <Route path="/users" element={<p>Users</p>} />
            <Route path="/settings" element={<p>Settings</p>} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Layout>
        /* && loggedIn */
      }
    </>
  );
};

export default App;
