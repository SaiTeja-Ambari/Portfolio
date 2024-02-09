import logo from './logo.svg';
import './App.css';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <WorkExperience></WorkExperience>
      <Education></Education>
      
    </div>
  );
}

export default App;
