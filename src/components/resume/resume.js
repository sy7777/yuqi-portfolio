import React from "react";
import "./resume.css";
const Resume = () => {
  return (
    <li id="portfolio" className="selected">
      <div className="title-container">
        <div className="shadow-img"></div>
        <h2 className="rotate-out rotated"><span class="invert">Resume Of</span> Yuqi Sui</h2>
      </div>
      <div className="description">
        <div className="tabs tabs_animate">
          {/* RESUME TAB LISTS */}
          <ul className="horizontal no-padding">
            <li>
              <a href="#tab-1" className="icon-bg icon-skills">
                <div>Skills</div>
              </a>
            </li>
            <li>
              <a href="#tab-2" className="icon-bg icon-education">
                <div>Educations</div>
              </a>
            </li>
            <li>
              <a href="#tab-3" className="icon-bg icon-employment">
                <div>Employment</div>
              </a>
            </li>
          </ul>
          {/* RESUME TAB LISTS ENDS */}

          {/* RESUME FIRST TAB/SKILL TAB DETAILS */}
          <div id="tab-1">
            <h3 className="title">MY SKILLS</h3>
            {/* SKILLS WITH BAR DISPLAY */}
            <ul className="skills-list no-padding">
              <li className="row">
                <div className="col-xs-2">
                  <div className="fw-mid">HTML</div>
                </div>
                <div className="col-xs-9">
                  <div className="bar">
                    <div className="percentage" id="bar1" style={{ width: "88%" }}></div>
                  </div>
                </div>
              </li>
              <li className="row">
                <div className="col-xs-2">
                  <div className="fw-mid">CSS</div>
                </div>
                <div className="col-xs-9">
                  <div className="bar">
                    <div className="percentage" id="bar2" style={{ width: "80%" }}></div>
                  </div>
                </div>
              </li>
              <li className="row">
                <div className="col-xs-2">
                  <div className="fw-mid">Javascript</div>
                </div>
                <div className="col-xs-9">
                  <div className="bar">
                    <div className="percentage" id="bar3" style={{ width: "75%" }}></div>
                  </div>
                </div>
              </li>
              <li className="row">
                <div className="col-xs-2">
                  <div className="fw-mid">Vue.Js</div>
                </div>
                <div className="col-xs-9">
                  <div className="bar">
                    <div className="percentage" id="bar4" style={{ width: "78%" }}></div>
                  </div>
                </div>
              </li>
              <li className="row">
                <div className="col-xs-2">
                  <div className="fw-mid">Node.js</div>
                </div>
                <div className="col-xs-9">
                  <div className="bar">
                    <div className="percentage" id="bar5" style={{ width: "65%" }}></div>
                  </div>
                </div>
              </li>
              <li className="row">
                <div className="col-xs-2">
                  <div className="fw-mid">Photoshop</div>
                </div>
                <div className="col-xs-9">
                  <div className="bar">
                    <div className="percentage" id="bar6" style={{ width: "80%" }}></div>
                  </div>
                </div>
              </li>
            </ul>
            {/* SKILLS WITH BAR DISPLAY ENDS */}

            {/* SKILLS WITH CIRCLE DISPLAY */}
            <div className="circle-skill-container">
              <h3 className="title">OTHER SKILLS</h3>
              <div className="row">
                <div className="col-xs-4 center-align">
                  <div className="circle-bar" id="line-container1">
                    <div className="progressbar-text" id="progress-text1">80</div>
                  </div>
                  <h5>WordPress</h5>
                </div>
                <div className="col-xs-4 center-align">
                  <div className="circle-bar" id="line-container2">
                    <div className="progressbar-text" id="progress-text2">70</div>
                  </div>
                  <h5>Git/Git CLI</h5>
                </div>
                <div className="col-xs-4 center-align">
                  <div className="circle-bar" id="line-container3">
                    <div className="progressbar-text" id="progress-text3">60</div>
                  </div>
                  <h5>Sql</h5>
                </div>
                <div className="col-xs-4 center-align">
                  <div className="circle-bar" id="line-container4">
                    <div className="progressbar-text" id="progress-text4">80</div>
                  </div>
                  <h5>TypeScript</h5>
                </div>
                <div className="col-xs-4 center-align">
                  <div className="circle-bar" id="line-container5">
                    <div className="progressbar-text" id="progress-text5">90</div>
                  </div>
                  <h5>GraphQl</h5>
                </div>
                <div className="col-xs-4 center-align">
                  <div className="circle-bar" id="line-container6">
                    <div className="progressbar-text" id="progress-text6">80</div>
                  </div>
                  <h5>CI/CD</h5>
                </div>
              </div>
            </div>
            {/* SKILLS WITH CIRCLE DISPLAY ENDS */}
          </div>
          {/* RESUME FIRST TAB/SKILL TAB DETAILS ENDS */}

          {/* RESUME SECOND TAB/EDUCATION TAB DETAILS */}
          <div id="tab-2">
            <h3 className="title">EDUCATIONS</h3>
            <ul className="education-class">
              <li>
                <h4 className="title">
                  Queensland University of Technology
                  <i className="fa fa-sort-desc pull-right"></i>
                </h4>
                <div className="list-content current">
                  <h5 className="title">
                    Master of TESOL
                    <span className="list-year">(2021.3 - Now)</span>
                  </h5>
                  <p>
                    Being a web developer volunteer at LBL Charity at the same time.
                  </p>
                </div>
              </li>
              <li>
                <h4 className="title">
                  The University of Queensland
                  <i className="fa fa-sort-desc pull-right"></i>
                </h4>
                <div className="list-content current">
                  <h5 className="title">
                    Master of IT
                    <span className="list-year">(2017.2 - 2018.11)</span>
                  </h5>
                  <p>HTML, CSS, JavaScript, SQL, Web Design, Node.js</p>
                </div>
              </li>
              <li>
                <h4 className="title">
                  SIIT Institution
                  <i className="fa fa-sort-desc pull-right"></i>
                </h4>
                <div className="list-content">
                  <h5 className="title">
                    Naati Certification
                    <span className="list-year">(2017 - 2018)</span>
                  </h5>
                  <p>The certification of translator from English to Mandarin</p>
                </div>
              </li>
              <li>
                <h4 className="title">
                  Sichuan Agricultural University
                  <i className="fa fa-sort-desc pull-right"></i>
                </h4>
                <div className="list-content">
                  <h5 className="title">
                    Bachelor of Agribusiness
                    <span className="list-year">(2012 - 2016)</span>
                  </h5>
                  <p>GPA 3.35/4</p>
                </div>
              </li>
            </ul>
          </div>
          {/* RESUME SECOND TAB/EDUCATION TAB DETAILS ENDS */}

          {/* RESUME THIRD TAB/EMPLOYMENT TAB DETAILS */}
          <div id="tab-3">
            <h3 className="title">EMPLOYMENT</h3>
            <ul className="employment-class tab-cont">
              <li>
                <h4>
                  Web Developer <span className="year">2022.05 - Now</span>
                </h4>
                <h5>Axis Tech</h5>
                <p>
                  Build Soil Data Broker Program website to collect data for WA government
                  using Vue, JavaScript, TypeScript, HTML, CSS, Laravel, Azure DevOps and
                  serverless function.
                </p>
                <p>
                  Build online Form Creator (Kind of like a low-code development platform)
                  using Vue, Bootstrap, Vuex, Cloudflare, CI/CD，Graphql, TypeOrm.
                </p>
              </li>
              <li>
                <h4>
                  Developer Programmer<span className="year">2021.11 – 2022.04</span>
                </h4>
                <h5>Parallel Data Research</h5>
                <p>Front-end work of the McDonald's website</p>
                <p>Maintain the website for daily requirement</p>
                <p>Maintain Azure database and server.</p>
              </li>
              <li>
                <h4>
                  Web Developer Intern <span className="year">2021.09 - 2021.10</span>
                </h4>
                <h5>ACESO</h5>
                <p>Angular, Putty, Node.Js, Database, Core UI, Git, </p>
                <p>Build a management system for pharmacy sales.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </li>
  );
};

export default Resume;