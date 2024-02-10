import React from "react";
import "./Education.css";
import SyracuseImage from "../images/syracuse.png";
import OsmaniaImage from "../images/osmania.png";
const Education = () => {
  const courses = [
    "Design and Analysis of Algorithms",
    "Object Oriented Design",
    "Natural Language Processing",
    "Structured Programming",
    "Data Mining",
    "Operating Systems",
    "Machine Learning",
  ];

  return (
    <div className="education-section" id="education">
      <h2>Education</h2>
      <div className="university">
        <div className="university-header">
          <img src={SyracuseImage} alt="Syracuse University" />
          <h3>Syracuse University</h3>
        </div>

        <p>Master of Science in Computer and Information Sciences, CGPA: 4/4</p>
        <h4>CourseWork:</h4>
        <ul>
          {courses.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
      </div>
      <div className="university">
        <div className="university-header">
          <img src={OsmaniaImage} alt="Osmania University" />
          <h3>Osmania University</h3>
        </div>
        <p>
          Bachelor of Engineering in Computer Science and Engineering, CGPA:
          8.97/10
        </p>
      </div>
    </div>
  );
};

export default Education;
