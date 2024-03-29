import React from "react";
import "./WorkExperience.css";
import SyracuseImage from "../images/syracuse.png";
import AccoliteImage from "../images/accolite.jpeg";
const WorkExperience = () => {
  // Define the work experience data
  const experiences = [
    {
      position: "Teaching Assistant",
      company: "Syracuse University",
      location: "New York, US",
      duration: "August 2023 - May 2024",
      responsibilities: [
        "Effectively managed and enriched the learning experience for 160 students in Dr. Farzana Rahman's 'Data Structures' and Dr Ercanli’s 'Database Systems' courses.",
        "Successfully initiated and facilitated peer-led study groups, leading to a notable 15% increase in average exam scores.",
      ],
    },
    {
      position: "Software Engineer",
      company: "Accolite Digital",
      location: "Hyderabad, India",
      duration: "July 2021 - July 2022",
      responsibilities: [
        "Refined the Kiuwan application's UI employing ReactJS and Bootstrap, enhancing the user experience in line with client-provided Figma designs.",
        "Established efficient session management in a React application using JavaScript, introducing auto-fill capabilities for returning users.",
        "Engineered and maintained microservices using Java and SpringBoot, integrating Hibernate ORM for streamlined data management with MySQL, resulting in optimized backend efficiency and service scalability.",
        "Developed a Spring Boot REST API for file rule extraction. Comparing the rules, pinpointing distinctions and highlighting similarities, differences, and changes.",
        "Created and maintained technical API documentation for new and existing APIs using Swagger.",
        "Implemented a sophisticated global search functionality within Kiuwan using Java Streams, enabling efficient filtering and identification of user affiliations across different groups.",
        "Developed generic code to implement pagination and sorting for all tables across the application with Java SpringBoot, significantly reducing code redundancy.",
        "Resolved technical issues and implemented unit tests in existing applications, achieving a 30% reduction in bugs.",
        "Implemented Test-Driven Development (TDD) practices using JUnit to ensure code integrity and reliability, resulting in a 30% reduction in post-release defects and improved software quality.",
        "Debugged and rectified critical issues in client software applications, ADS and XRAY, using Java expertise, enhancing application stability.",
      ],
    },
    {
      position: "Software Intern",
      company: "Accolite Digital",
      location: "Hyderabad, India",
      duration: "February 2021 - July 2021",
      responsibilities: [
        "Upgraded to Adopt JRE 8, replacing Oracle JRE 7, and transitioning the system from Tomcat 7 to Tomcat 9.",
        "Integrated Git for version control, employed Maven for build management, and deployed Jenkins for continuous integration and continuous delivery (CI/CD) during the development and maintenance of Idera CWF.",
        "Adopted Agile methodology for application development, engaging in daily SCRUM meetings to drive collaborative and iterative development processes.",
      ],
    },
  ];

  return (
    <div className="work-experience-section" id="work-experience">
      <h2>Work Experience</h2>
      {experiences.map((experience, index) => (
        <div key={index} className="experience">
          <div className="experience-header">
            {experience.company === "Syracuse University" && (
              <img src={SyracuseImage} alt="Syracuse University" />
            )}
            {experience.company === "Accolite Digital" && (
              <img src={AccoliteImage} alt="Accolite Digital" />
            )}

            <h3>
              {experience.position}, {experience.company} -{" "}
              {experience.location}
            </h3>
            <p>{experience.duration}</p>
          </div>
          <ul>
            {experience.responsibilities.map((responsibility, idx) => (
              <li key={idx}>{responsibility}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;
