import React from 'react';
import Header from './components/Header';
import FrontPage from './components/FrontPage';
import Menu from './components/Menu';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <FrontPage />
      <Menu />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
