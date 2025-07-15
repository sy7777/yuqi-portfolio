// import { useState } from 'react';
// import FrontPage from './components/frontpage/frontPage';
// import Home from './components/home/home';
// import Menu from './components/menu/menu';
// import Portfolio from './components/portfolio/portfolio';
// import Resume from './components/resume/resume';
// import './App.css'; // Ensure this path is correct
// function App() {
//   const [currentPage, setCurrentPage] = useState('front');
//   const [contentVisible, setContentVisible] = useState(false);

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//     setContentVisible(true);
//   };

//   const hideFront = () => {
//     setCurrentPage('home');
//     setContentVisible(true);
//   };

//   return (
//     <div className="app" style={{
//       backgroundImage: `url(${process.env.PUBLIC_URL + '/bg.png'})`,
//       backgroundSize: 'cover',
//       height: '100vh',
//     }}>
//       {/* Render the front page only if currentPage is 'front' */}
//       {currentPage === 'front' && <FrontPage onHideFront={hideFront} />}

//       {contentVisible && (
//         <div className="content-container">
//           <div className="page-content">
//             {currentPage === 'home' && <Home />}

//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect } from "react";
import FrontPage from "./components/frontpage/frontPage";
import Home from "./components/home/home";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState("front");
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    // Simulate loading (replace with real data loading if needed)
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const hideFront = () => {
    setAnimationComplete(true);
    setTimeout(() => {
      setCurrentPage("home");
    }, 100);
  };

  if (loading) {
    return (
      <div className="loading-screen">
        <img
          src={process.env.PUBLIC_URL + "/Preloader_7.gif"}
          alt="Loading..."
          style={{ width: 80, height: 80 }}
        />
      </div>
    );
  }

  return (
    <div
      className="app"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/bg.png"})`,
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      {currentPage === "front" && (
        <FrontPage onHideFront={hideFront} animationComplete={animationComplete} />
      )}
      {currentPage === "home" && <Home />}
    </div>
  );
}

export default App;