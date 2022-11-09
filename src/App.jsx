import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Resume from './pages/Resume/Resume'
import ProjectList from './pages/ProjectList/ProjectList'
import Projects from './pages/Project/Project'
import NavBar from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  return (
    <>
      <NavBar className='navBar'/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='resume' element={<Resume />} />
        <Route path='projectlist' element={<ProjectList />} />
        <Route path='projects' element={<Projects />} />  
      </Routes>
    </>
  );
}

export default App;

//TODO : check on Projects path -- this changed



