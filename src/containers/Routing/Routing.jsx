import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "../../pages/Home/Home";
import Layout from "../../components/Layout/Layout";
import Pathways from "../../pages/Pathways/Pathways";
import ArticleList from "../../pages/tempPages/ArticleList";
import Marketplace from "../../pages/tempPages/Marketplace";
import SingleArticle from "../../pages/tempPages/SingleArticle";
import AddArticle from "../../pages/tempPages/AddArticle";
import AddPrize from "../../pages/tempPages/AddPrize";
import SingleItem from "../../pages/tempPages/SingleItem";
import SinglePathway from "../../pages/SinglePathway/SinglePathway";
import SinglePathwayCourses from "../../pages/tempPages/SinglePathwayCourses";
import CourseAddLesson from "../../pages/tempPages/CourseAddLesson";
import CourseSingleLesson from "../../pages/tempPages/CourseSingleLesson";
import LandingPageHeader from "../../components/LandingPageHeader/LandingPageHeader";
import LandingPage from "../../pages/LandingPage/LandingPage";
import LoginPage from "../../pages/LogInPage/LoginPage";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import CourseList from "../../pages/CourseList/CourseList";
import CoursePage from "../../pages/CoursePage/CoursePage";

const Routing = () => {

  const [logIn, setLogIn] = useState(false);
  const [user, setUser] = useState({});

  return (
    <>
      {!logIn && 
        (
          <>
            <LandingPageHeader/>
            <Routes>
              <Route path="/" element={<LandingPage/>}/>
              <Route path="/register" element={<RegisterPage setLogIn={setLogIn} setUser={setUser} />}/>
              <Route path="/sign-in" element={<LoginPage setLogIn={setLogIn} setUser={setUser} />}/>
            </Routes>
          </>
        )
      }
      {
        logIn &&
        (
          <Layout user={user}>
            <Routes>

              <Route path="/pathways" element={<Pathways />} />
              <Route path="/pathways/:pathwayName" element={<SinglePathway />} />
              <Route path="/pathways/:pathwayName/courses" element={<SinglePathwayCourses />} />
              <Route
                path="/pathways/:pathwayName/courses/list"
                element={<CourseList />}
              />
              <Route path="/:courseName" element={<CoursePage />} />
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
        )
      }
    </>
  );
};

export default Routing;