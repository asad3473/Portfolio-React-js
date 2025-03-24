import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import withRouter from "../hooks/withRouter";
import AppRoutes from "./routes";
import Headermain from "../header";
import Loader from "../Loader/Loader"; // Import Loader
import "./App.css";
import { Portfolio } from "../pages/portfolio";
import { About } from "../pages/about";
import { ContactUs } from "../pages/contact";

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust time as needed
  }, []);

  return (
    <>
      {loading ? (
        <Loader /> // Show loader while loading
      ) : (
        <Router basename={process.env.PUBLIC_URL}>
          <ScrollToTop>
            <Headermain />
            <AppRoutes />
          </ScrollToTop>
          <Portfolio />
          <About />
          <ContactUs />
        </Router>
      )}
    </>
  );
}
