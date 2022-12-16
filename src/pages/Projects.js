import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";
import { PROJECTS } from "../const/projects";
import Project1 from "../assets/images/question-mark-black.png";

const Projects = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div>
          <h1>Trivia Game</h1>
          <h3>
            This game will ask random questions at the level you select. It is
            built using React, Typescript, ReduxToolkit, Sass, and Jest
          </h3>
          <div className="image-div">
            <a href={PROJECTS.triviaFighters}>
              {" "}
              <img className="projectImage" src={Project1}></img>
            </a>
          </div>
        </div>
        <div>
          <h1>TV Show API</h1>
          <h3>
            This is a React App that searches for TV Shows and Displays the
            results. You can click on a TV Show to see the details of that show.
          </h3>
          <div className="image-div">
            <a href={PROJECTS.TVShowChallenge}>
              <img className="projectImage" src={Project1}></img>
            </a>
          </div>
          <div>
          <h1>TV Show API After Apprenticeship</h1>
          <h3>
            This is a React App that searches for TV Shows and Displays the
            results. You can click on a TV Show to see the details of that show.
            It is built using React, Typescript.
          </h3>
          <div className="image-div">
            <a href={PROJECTS.ChallengeAfter}>
              <img className="projectImage" src={Project1}></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
