// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import Search from "./pages/Search";
import AboutPage from "./pages/AboutPage";
import Uploader from "./pages/Uploader";
import Faqs from "./pages/Faqs";
import UserProfile from "./pages/UserProfile";
import LoginPage from "./pages/LoginPage";
import Signup from "./pages/SignUp";
import { useSelector } from "react-redux";

const App = () => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  return (
    <Router>
      <nb />

      <div>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          {isAuthenticated ? (
            <>
              <Route path="/Uploader" element={<Uploader />} />
              <Route path="/UserProfile" element={<UserProfile />} />
              <Route path="/Search" element={<Search />} />
            </>
          ) : (
            <>
              <Route path="/Signup" element={<Signup />} />
              <Route path="/LoginPage" element={<LoginPage />} />
            </>
          )}
          <Route path="/AboutPage" element={<AboutPage />} />
          <Route path="/Faqs" element={<Faqs />} />
        </Routes>
      </div>
    </Router >
  );
};

export default App;