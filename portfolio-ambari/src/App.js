import logo from './logo.svg';
import './App.css';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';
import Header from './components/Header';
import Nav from './components/Nav';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <div className='sections'>
      <Header></Header>
      <WorkExperience></WorkExperience>
      <Skills></Skills>
      <Education></Education>
      <Projects></Projects>
      
      </div>
    </div>
  );
}

export default App;
