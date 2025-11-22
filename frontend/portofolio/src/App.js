import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './App.css';

import { Header } from './Components/Header/Header';
import { SinglePage } from './Components/Home/SinglePage';
import { ProjectDetail } from './Components/Project/ProjectDetail';
import CV from './Components/CV/CV';


function App() {
  return (
    <Router basename='/portofolio'>
      <Helmet>
        <title>Home</title>
        <link rel="icon" type="image/png" href={`${process.env.PUBLIC_URL}/favicon/homeicon.png`} />
      </Helmet>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<SinglePage />} />
            <Route path="/portofolio/cv" element={<CV />} />
            <Route path="/portofolio/projects/:id" element={<ProjectDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
