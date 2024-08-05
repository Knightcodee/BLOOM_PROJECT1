// src/components/AllRoutes.jsx

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Description from "./Description";
import Contact from "./Contact";
import Profile from "./Profile";
import Signup from "./Signup";
import ErrorBoundary from "./ErrorBoundary"; // Import the Error Boundary

function AllRoutes() {
  return (
    <Router basename="/BLOOM_PROJECT1/">  {/* Ensure this matches your GitHub repository name */}
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/description/:id/:name" element={<Description />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </ErrorBoundary>
    </Router>
  );
}

export default AllRoutes;
