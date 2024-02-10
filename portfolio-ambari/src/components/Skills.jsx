// Skills.js
import React from 'react';
import './Skills.css'; // Import the CSS file

const Skills = () => {
  const programmingLanguages = ['Java', 'Python', 'C', 'C++', 'SQL', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'MATLAB', 'Haskell', 'Unix', 'R'];
  const webTechnologiesFrameworks = ['ReactJS', 'Spring Boot', 'Node.js', 'Angular', 'JUnit', 'ZK', 'Bootstrap', 'Kafka', 'Django', 'NumPy'];
  const developerTools = ['IntelliJ', 'Eclipse', 'Tortoise-Git', 'JIRA', 'Git CLI', 'Postman', 'SQL Workbench', 'Bitbucket', 'PyCharm', 'VS Code'];

  return (
    <div className="skills-section" id="skills">
      <h2>Programming Languages</h2>
      <div className="skills-container">
        {programmingLanguages.map((language) => (
          <div key={language} className="skill">{language}</div>
        ))}
      </div>

      <h2>Web Technologies / Frameworks</h2>
      <div className="skills-container">
        {webTechnologiesFrameworks.map((technology) => (
          <div key={technology} className="skill">{technology}</div>
        ))}
      </div>
      
      <h2>Developer Tools</h2>
      <div className="skills-container">
        {developerTools.map((tool) => (
          <div key={tool} className="skill">{tool}</div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
