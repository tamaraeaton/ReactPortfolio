import React from "react";
import Header from "../components/Header/Header";
import Resume from "../assets/files/TamaraEatonResume.docx";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <h1>
          My name is Tamara Eaton. I have recently been certified as a Full
          Stack Developer on the MERN stack. I have 2 years professional
          experience in software development. I bring a wealth of other
          experience to the table. Please download my resume.
        </h1>
        <button className="downloadResumeButton">
          <a
            className="downloadResumeButtonLink"
            href={Resume}
            target="blank"
            download
            onClick={() => console.log("clicked")}
          >
            Download Resume
          </a>
        </button>
      </div>
    </div>
  );
};

export default AboutMe;
