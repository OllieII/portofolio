import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './App.css';

import { Header } from './Components/Header/Header';
import { Home } from './Components/Home/Home';
import { Skill } from './Components/Skills/Skill';
import Projects from './Components/Project/Projects';
import BlogList from './Components/Blog/BlogList';
import { ProjectDetail } from './Components/Project/ProjectDetail';


function App() {
  return (
    <Router>
      <Helmet>
        <title>Home</title>
        <link rel="icon" type="image/png" href={`${process.env.PUBLIC_URL}/favicon/homeicon.png`} />
      </Helmet>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/portofolio/about" element={<Home />} />
            <Route path="/portofolio" element={<Home />} />
            <Route path="/portofolio/projects" element={<Projects />} />
            <Route path="/portofolio/projects/:id" element={<ProjectDetail />} />
            <Route path="/portofolio/skills" element={<Skill />} />
            <Route path="/portofolio/blog" element={<BlogList />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
