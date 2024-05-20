import React from "react"; // [1]
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // [2]
import Home from "./pages/Home";
import BlogList from "./pages/BlogList";
import BlogDetail from "./pages/BlogDetail";
import Layout from "./common/Layout";
import AiChatAssistance from "./pages/AiChatAssistance";
import AboutUs from "./pages/AboutUs";
import useLanguageDirection from "./components/useLanguageDirection";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import PrivateRoute from "./routes/PrivateRoute";

const App = () => {
  useLanguageDirection()
  return (
    <Router>
      <Routes>
      <Route
          path="/login"
          element={
              <Login />
          }
          exact
        />
        <Route
          path="/sign-up"
          element={
              <SignUp />
          }
          exact
        />
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
          exact
        />
        <Route
          path="/blog-list"
          element={
            <Layout>
              <BlogList />
            </Layout>
          }
          exact
        />
        <Route
          path="/about-us"
          element={
            <Layout>
              <AboutUs />
            </Layout>
          }
          exact
        />
        <Route
          path="/ai-assistance"
          element={
            <PrivateRoute
              element={
                <Layout>
                  <AiChatAssistance />
                </Layout>
              }
            />
          }
        />
        <Route
          path="/blog/:id"
          element={
            <Layout>
              <BlogDetail />
            </Layout>
          }
          exact
        />
      </Routes>
    </Router>
  );
};

export default App;

// [1] React, "React Documentation," [Online]. Available: https://reactjs.org/docs/getting-started.html. [Accessed: April 21, 2024].
// [2] React Training, "React Router Documentation," [Online]. Available: https://reactrouter.com/web/guides/quick-start. [Accessed: April 21, 2024].