import React from "react";
import "./Projects.css"; // Ensure this CSS file is updated as well

import TwitterImage from "../images/twitter.png";
import GameImage from "../images/game.jpeg";
import AdvertisementImage from "../images/advertisement.png";
import TicketImage from "../images/ticket.png";
// Example project array with added image URLs
const projects = [
  {
    name: "Twitter Hate Speech Detection",
    description:
      "Leveraged Bag of Words and TF-IDF analysis on Twitter data in Python to counter hate speech. Conducted a comparative study of classification algorithms, achieving an F1 score of 0.91.",
    imageUrl: TwitterImage,
  },
  {
    name: "Ticket Management System",
    description:
      "Devised a full stack application utilizing MVC architecture leveraging CRUD operations to empower administrators, users, and members for seamless issue reporting, tracking, and resolution employing Angular for the frontend, Java for the backend, SpringBoot for server-side logic, and H2 for data storage.",
    imageUrl: TicketImage,
  },
  {
    name: "Advertise Here",
    description:
      "Designed a full-stack web application facilitating ad creation, product discovery, and user-seller connections. Gained expertise in Java Server Pages (JSP), Servlets, and JDBC and utilized MySQL.",
    imageUrl: AdvertisementImage,
  },
  {
    name: "Game Hub App",
    description:
      'Designed a React.js gaming platform, deployed on Vercel, fetching game data from "rawg.io". The user interface is enhanced using both Chakra UI and Bootstrap for a responsive appealing design. Code versioning and management are facilitated through Git, ensuring efficient collaboration and tracking of changes.',
    imageUrl: GameImage,
  },
];

const Projects = () => {
  return (
    <div className="projects-section" id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <img
              src={project.imageUrl}
              alt={project.name}
              className="project-image"
            />
            <div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
