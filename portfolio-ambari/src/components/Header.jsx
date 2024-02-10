import React from "react";
import "./Header.css";
import ProfilePic from "../images/ambari.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FaGithub } from "react-icons/fa";
import { IoIosDocument } from "react-icons/io";

const Header = () => {
  return (
    <header className="header" id="home">
      <img src={ProfilePic} alt="Profile" className="profile-pic" />
      <div className="info">
        <div className="about">
        <h1>SAI TEJA AMBARI</h1>
        <p>
          Syracuse, NY |{" "}
          <a href="mailto:sambari@g.syr.edu" target="_blank">
            sambari@g.syr.edu
          </a>{" "}

        </p>
        <p>
        Actively seeking Full-time opportunities | MS CS Student at Syracuse University, Ex Accolite
        </p>
        <p>
        Welcome to my portfolio! I'm Sai Teja Ambari, a Master's student at Syracuse University with a passion for technology and innovation. Here, you'll find a showcase of my projects and experiences, 
        from developing full-stack applications to enhancing software with cutting-edge technologies. My work as a software engineer and teaching assistant has equipped me with a diverse skill set, including expertise in Java, Python, ReactJS, and more. Each project reflects my commitment to solving complex problems and contributing to the tech community. Dive in to explore my journey and the solutions I've crafted along the way.

I'm set to graduate in May 2024 and am actively seeking full-time Software Development Engineer (SDE) roles. I'm excited about the opportunity to bring my strong technical background and problem-solving skills to a dynamic team, where I can contribute to meaningful projects and continue to grow. Let's connect and explore how I can contribute to your team with my passion for technology and innovation.
        </p>
        </div>
        <div className="contact-info">
          <p>
            <a
              href="https://www.linkedin.com/in/sai-teja-ambari/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="black-icon"
                icon={faLinkedin}
                size="2x"
              />
            </a>
            <a
              href="https://github.com/SaiTeja-Ambari"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="black-icon" size={30} />
            </a>
            <a
              href="https://drive.google.com/file/d/1jq-RPaWpoVl7d7Gv96RviZpzbhmH9Dzl/view?usp=sharing"
              target="_blank"
            >
              {" "}
              <IoIosDocument className="black-icon" size={30} />
            </a>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;

