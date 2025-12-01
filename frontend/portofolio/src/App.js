import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './App.css';

import { Header } from './Components/Header/Header';
import { SinglePage } from './Components/Home/SinglePage';
import { ProjectDetail } from './Components/Project/ProjectDetail';
import CV from './Components/CV/CV';
import UCSCPortfolio from './Components/UCSC/UCSCPortfolio';
import { initGA, logPageView } from './analytics';

function Analytics() {
  const location = useLocation();

  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    logPageView();
  }, [location]);

  return null;
}

function App() {
  const location = useLocation();
  const isUCSCPage = location.pathname === '/ucsc-cm-portfolio-2026';

  return (
    <>
      <Helmet>
        <title>Home</title>
        <link rel="icon" type="image/png" href={`${process.env.PUBLIC_URL}/favicon/homeicon.png`} />
      </Helmet>
      
      {/* Hide header on UCSC portfolio page */}
      {!isUCSCPage && (
        <div className="App">
          <Header />
        </div>
      )}
      
      <main>
        <Routes>
          <Route path="/" element={<SinglePage />} />
          <Route path="/portofolio/cv" element={<CV />} />
          <Route path="/ucsc-cm-portfolio-2026" element={<UCSCPortfolio />} />
          <Route path="/portofolio/projects/:id" element={<ProjectDetail />} />
        </Routes>
      </main>
    </>
  );
}

function AppWrapper() {
  return (
    <Router basename="/portofolio">
      <Analytics />
      <App />
    </Router>
  );
}

export default AppWrapper;
