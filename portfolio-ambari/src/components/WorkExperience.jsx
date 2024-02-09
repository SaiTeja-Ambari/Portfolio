import React from 'react';
import './WorkExperience.css'; 
import SyracuseImage from '../images/syracuse.png'; 
import AccoliteImage from '../images/accolite.jpeg'; 
const WorkExperience = () => {
  // Define the work experience data
  const experiences = [
    {
      position: "Teaching Assistant",
      company: "Syracuse University",
      location: "New York, US",
      duration: "August 2023 - May 2024",
      responsibilities: [
        "Effectively managed and enriched the learning experience for 160 students in Dr. Farzana Rahman's 'Data Structures' and Dr. Ercanli’s 'Database Systems' courses.",
        "Successfully initiated and facilitated peer-led study groups, leading to a notable 15% increase in average exam scores."
      ]
    },
    {
      position: "Software Engineer",
      company: "Accolite Digital",
      location: "Hyderabad, India",
      duration: "July 2021 - July 2022",
      responsibilities: [
        "Refined the Kiuwan application's UI employing ReactJS and Bootstrap, enhancing the user experience in line with client-provided Figma designs.",
        // Add other responsibilities here
        "Debugged and rectified critical issues in client software applications, ADS and XRAY, using Java expertise, enhancing application stability."
      ]
    },
    {
      position: "Software Engineer Intern",
      company: "Accolite Digital",
      location: "Hyderabad, India",
      duration: "February 2021 - July 2021",
      responsibilities: [
        "Upgraded to Adopt JRE 8, replacing Oracle JRE 7, and transitioning the system from Tomcat 7 to Tomcat 9.",
        // Add other responsibilities here
        "Adopted Agile methodology for application development, engaging in daily SCRUM meetings to drive collaborative and iterative development processes."
      ]
    }
  ];

  return (
    <div className="work-experience-section">
      <h2>Work Experience</h2>
      {experiences.map((experience, index) => (
        <div key={index} className="experience">
            <div className='experience-header'>
            {
  experience.company === "Syracuse University" &&
  <img src={SyracuseImage} alt="Syracuse University" />
}
{
  experience.company === "Accolite Digital" &&
  <img src={AccoliteImage} alt="Accolite Digital" />
}


          <h3>{experience.position}, {experience.company} - {experience.location}</h3>
          <p>{experience.duration}</p>
          </div>
          <ul>
            {experience.responsibilities.map((responsibility, idx) => (
              <li key={idx}>{responsibility}</li>
            ))}
          </ul>
        </div>
      ))}
      <div id="projects">
  {/* Projects content here */}
</div>

    </div>
  );
}

export default WorkExperience;
