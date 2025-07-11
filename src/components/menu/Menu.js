const Menu = ({ onPageChange, currentPage }) => {
  return (
    <div className="navbar-container">
      <div className="namecard">
        <div className="shadow-img"></div>
        <h1 className="maintitle">Yuqi <span className="invert"></span></h1>
        <h3 className="invert sub-maintitle">Web/UI Developer, Designer</h3>
        <img className="profile-img" src="/images/myPhoto.png" alt="profile" />
      </div>
      
      <ul className="nav-menu">
        <li 
          className={currentPage === 'home' ? 'selected' : ''} 
          onClick={() => onPageChange('home')}
        >
          <div className="hover-background"></div>
          <span>About Me</span><i className="fa fa-user fa-fw"></i>
        </li>
        <li 
          className={currentPage === 'resume' ? 'selected' : ''} 
          onClick={() => onPageChange('resume')}
        >
          <div className="hover-background"></div>
          <span>Resume</span><i className="fa fa-file-text fa-fw"></i>
        </li>
        <li 
          className={currentPage === 'portfolio' ? 'selected' : ''} 
          onClick={() => onPageChange('portfolio')}
        >
          <div className="hover-background"></div>
          <span>Portfolio</span><i className="fa fa-suitcase fa-fw"></i>
        </li>
        <li 
          className={currentPage === 'contact' ? 'selected' : ''} 
          onClick={() => onPageChange('contact')}
        >
          <div className="hover-background"></div>
          <span>Contact</span><i className="fa fa-paper-plane fa-fw"></i>
        </li>
      </ul>
      
      <div className="social-menu">
        <a href="https://github.com/sy7777"><i className="fa fa-github"></i></a>
        <a href="https://www.linkedin.com/in/yuqisui"><i className="fa fa-linkedin"></i></a>
      </div>
    </div>
  );
};

export default Menu;