import React from 'react';
import './Header.css';
import ProfilePic from '../images/syracuse.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FaGithub } from 'react-icons/fa';
import { IoIosDocument } from 'react-icons/io';

const Header = () => {
  return (
    <header className="header" >
        
      <img src={ProfilePic} alt="Profile" className="profile-pic" />
      <div className="info">
        <h1>SAI TEJA AMBARI</h1>
        <p>Syracuse, NY | <a href="mailto:sambari@g.syr.edu" target="_blank">sambari@g.syr.edu</a> | +1 (315) 991-9073</p>
        <div className='contact-info'>
        
        <p>
          <a href="https://www.linkedin.com/in/sai-teja-ambari/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>  
          <a href="https://github.com/SaiTeja-Ambari" target="_blank" rel="noopener noreferrer">         
          <FaGithub size={30} />
</a> 
          <a href="https://drive.google.com/file/d/1jq-RPaWpoVl7d7Gv96RviZpzbhmH9Dzl/view?usp=sharing" target="_blank">      <IoIosDocument size={30} />
</a> 
        
        </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
