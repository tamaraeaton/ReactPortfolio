import React, { useEffect } from "react";
import {
  BrowserRouter,
  Route,
  Routes as BrowserRoutes,
  useNavigate,
} from "react-router-dom";
import Home from "../../pages/Home";
import AboutMe from "../../pages/AboutMe";
import Projects from "../../pages/Projects";

const Routes = () => {
  // had to move this to its own component so the useNavigate can have a BrowserRouter parent to refer to
  // useNavigate is in this child component so it can find the parent

  const navigate = useNavigate();

  useEffect(() => {
    navigate("/", { replace: true });
  }, []);

  return (
    <BrowserRoutes>
      <Route path="/" element={<Home />} />
      <Route path="aboutme" element={<AboutMe />} />
      <Route path="projects" element={<Projects />} />
    </BrowserRoutes>
  );
};
export default Routes;
