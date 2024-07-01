import logo from './logo.svg';
import { Header } from './Components/Header';
import { About } from './Components/About';
import {Skill} from './Components/Skills/Skill';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Projects from './Components/Projects';
import BlogList from './Components/Blog/BlogList';
/*
let router = createBrowserRouter([
  {path: '/about', element: <About/>},
]);
*/
function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/skills" element={<Skill />} />
          <Route path="/blog" element={<BlogList />} />
        </Routes>
      </main>
    </div>
  </Router>
  );
}

export default App;
