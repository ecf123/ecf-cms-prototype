import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import ListContainer from "../ListContainer/ListContainer";
import Login from "../../components/Login/Login";
import AddPage from "../../containers/AddPage/AddPage";

const Routing = () => {
  return (
    <Router>
      <div className="app">
        {
          <Routes>
            <Route path="/notin" element={<Login />}>
              {/* Not logged in */}
            </Route>
          </Routes> /* && !loggedIn  */
        }
        {
          <Layout>
            <Routes>
              {/* Logged in */}

              <Route path="/pathways" element={<p>Pathways</p>} />
              <Route
                path="/pathways/add"
                element={
                  <AddPage
                    shortLabelTextOne=""
                    shortLabelTextTwo=""
                    shortPlaceHolderTextOne=""
                    shortPlaceHolderTextTwo=""
                    freeTypeLabelTextOne=""
                    freeTypeLabelTextTwo=""
                    uploadLabelName=""
                  />
                }
              />
              <Route path="/pathways/:pathwayId" />
              <Route path="/pathways/:pathwayId/courses" />
              <Route path="/pathways/:pathwayId/:courseId" />
              <Route
                path="/pathways/:pathwayId/:courseId/add"
                element={
                  <AddPage
                    shortLabelTextOne=""
                    shortLabelTextTwo=""
                    shortPlaceHolderTextOne=""
                    shortPlaceHolderTextTwo=""
                    freeTypeLabelTextOne=""
                    freeTypeLabelTextTwo=""
                    uploadLabelName=""
                  />
                }
              />
              <Route path="/pathways/:pathwayId/:courseId/:lessonId" />

              <Route
                path="/articles"
                element={<ListContainer title="Article" />}
              />
              <Route
                path="/articles/add"
                element={
                  <AddPage
                    shortLabelTextOne=""
                    shortLabelTextTwo=""
                    shortPlaceHolderTextOne=""
                    shortPlaceHolderTextTwo=""
                    freeTypeLabelTextOne=""
                    freeTypeLabelTextTwo=""
                    uploadLabelName=""
                  />
                }
              />
              <Route path="/articles/:articleId" />

              <Route
                path="/marketplace"
                element={<ListContainer title="Marketplace" />}
              />
              <Route
                path="/marketplace/add"
                element={
                  <AddPage
                    shortLabelTextOne=""
                    shortLabelTextTwo=""
                    shortPlaceHolderTextOne=""
                    shortPlaceHolderTextTwo=""
                    freeTypeLabelTextOne=""
                    freeTypeLabelTextTwo=""
                    uploadLabelName=""
                  />
                }
              />
              <Route path="/marketplace/:marketplaceId" />

              <Route path="/users" element={<p>Users</p>} />

              <Route path="/settings" element={<p>Settings</p>} />

              <Route path="/" element={<p>Dashboard</p>} />
            </Routes>
          </Layout> /* && loggedIn */
        }
      </div>
    </Router>
  );
};

export default Routing;
