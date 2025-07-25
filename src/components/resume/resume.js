import React, { useState } from "react";
import "./resume.css";
// import "./resume.module.css";
// import "../../App.css";
// skills tab
const skills = [
  { name: "HTML/CSS", percent: 98 },
  { name: "Javascript", percent: 85 },
  { name: "Node.js", percent: 85 },
  { name: "Vue/Vuex", percent: 80 },
  { name: "React", percent: 65 },
  { name: "Angular", percent: 70 },
  { name: "php", percent: 70 },
  { name: "CMS-Drupal", percent: 80 },
];

const otherSkills = [
  { name: "Git/Git CLI", percent: 90 },
  { name: "Sql", percent: 65 },
  { name: "TypeScript", percent: 70 },
  { name: "GraphQl", percent: 95 },
  { name: "CI/CD", percent: 95 },
];

function ProgressCircle({ percent }) {
  const radius = 46;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - percent / 100);

  return (
    <svg viewBox="0 0 100 100" style={{ display: "block", width: "100%" }}>
      <path
        d="M 50,50 m 0,-46 a 46,46 0 1 1 0,92 a 46,46 0 1 1 0,-92"
        stroke="#e6f7ec"
        strokeWidth="7"
        fillOpacity="0"
      />
      <path
        d="M 50,50 m 0,-46 a 46,46 0 1 1 0,92 a 46,46 0 1 1 0,-92"
        stroke="#b5dac1"
        strokeWidth="8"
        fillOpacity="0"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        style={{ transition: "stroke-dashoffset 1s" }}
      />
    </svg>
  );
}
function SkillsList() {
  return (
    <ul className="skills-list no-padding">
      {skills.map((skill, idx) => (
        <li className="row" key={skill.name}>
          <div className="col-xs-3">
            <div className="fw-mid">{skill.name}</div>
          </div>
          <div className="col-xs-8">
            <div className="bar">
              <div
                className="percentage"
                id={`bar${idx + 1}`}
                style={{ width: `${skill.percent}%` }}
              ></div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

function OtherSkillsCircles() {
  return (
    <div className="circle-skill-container">
      <h3 className="title">OTHER SKILLS</h3>
      <div className="row">
        {otherSkills.map((skill, idx) => (
          <div className="col-xs-4 center-align" key={skill.name}>
            <div className="circle-bar" id={`line-container${idx + 1}`}>
              <div className="progressbar-text" id={`progress-text${idx + 1}`}>
                {skill.percent}%
              </div>
              <ProgressCircle percent={skill.percent} />
            </div>
            <h5>{skill.name}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}

// education tab
const educationList = [
  {
    school: "Queensland University of Technology",
    degree: "Master of TESOL",
    year: "(2021.3 - Now)",
    content: "Being a web developer volunteer at LBL Charity at the same time."
  },
  {
    school: "The University of Queensland",
    degree: "Master of IT",
    year: "(2017.2 - 2018.11)",
    content: "HTML, CSS, JavaScript, SQL, Web Design, Node.js"
  },
  {
    school: "Sichuan Agricultural University",
    degree: "Bachelor of Agribusiness",
    year: "(2012 - 2016)",
    content: "GPA 3.35/4"
  }
];

function EducationList() {
  const [openedIndex, setOpenedIndex] = useState(null);
  const toggleContent = (index) => {
    setOpenedIndex(openedIndex === index ? null : index);
  }
  return (
    <ul className="education-class">
      {educationList.map((edu, index) => (
        <li key={edu.school} className={openedIndex === index ? "current" : ""}>
          <h4 className="title" onClick={() => toggleContent(index)}>
            {edu.school} <i className="fa fa-sort-desc pull-right"></i>
          </h4>
          {openedIndex === index && (
            console.log(openedIndex, index),
            <div className="list-content">
              <h5 className="title">
                {edu.degree} <span className="list-year">{edu.year}</span>
              </h5>
              <p>{edu.content}</p>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

// tab data
const tabData = [
  {
    id: "tab-skills",
    label: "Skills",
    icon: "icon-skills",
    bg: `/resume/icon_01.png`,
    content: (
      <div>
        <h3 className="title">MY SKILLS</h3>
        <SkillsList />
        <OtherSkillsCircles />
      </div>
    )
  },
  {
    id: "tab-employment",
    label: "Employment",
    icon: "icon-employment",
    bg: `/resume/icon_03.png`,
    content: (
      <div>
        <h3 className="title">EMPLOYMENT</h3>
        <ul className="employment-class tab-cont">
          <li>
            <h4>
              Web Developer <span className="year">2023 - Present</span>
            </h4>
            <h5>TPG Telecom</h5>
            <p>Built flexible and reusable Drupal CMS templates to streamline internal content production workflows across multiple brands (Vodafone, TPG, iiNet, Internode).</p>
            <p>
              Worked closely with product managers, designers, and stakeholders to deliver efficient frontend tooling for content and localization teams.
            </p>
            <p>Evaluated and implemented multiple JavaScript-based solutions for feature delivery, using A/B testing to determine optimal performance and UX.</p>
            <p>Contributed to accessibility compliance and frontend performance optimization across brand websites.</p>
            <p>Provided ongoing debugging, testing, and cross-browser compatibility support in a high-traffic production environment.</p>
          </li>
          <li>
            <h4>
              Front end developer <span className="year">2022 - 2023</span>
            </h4>
            <h5>Axis Tech</h5>
            <p>
              Developed a low-code form builder platform using Vue.js, Vuex, Node.js, Bootstrap, and TypeORM.
            </p>
            <p>
              Designed and implemented GraphQL APIs to power efficient data queries and mutations.
            </p>
            <p>
              Deployed production-ready systems using Cloudflare and CI/CD pipelines.
            </p>
            <p>
              Performed database modeling and management using TypeORM, ensuring efficient queries and a well-structured data model.
            </p>
            <p>
              Collaborated with internal and external stakeholders to continuously improve UX based on feedback and data insights.
            </p>
          </li>
          <li>
            <h4>
              Developer Programmer<span className="year">2021 – 2022</span>
            </h4>
            <h5>Parallel Data Research</h5>
            <p>Built and maintained the McDonald’s Ad Tracker web portal with JavaScript, HTML, and CSS.</p>
            <p>Maintain the website for daily requirement</p>
            <p>Designed custom survey systems using Decipher and Python for market research clients.</p>
          </li>
          <li>
            <h4>
              Web Developer Intern <span className="year">2021 - 2021</span>
            </h4>
            <h5>ACESO</h5>
            <p>Angular, Putty, Node.Js, Database, Core UI, Git, </p>
            <p>Build a management system for pharmacy sales.</p>
          </li>
        </ul>
      </div>
    )
  },
  {
    id: "tab-education",
    label: "Educations",
    icon: "icon-education",
    bg: `/resume/icon_02.png`,
    content: (
      <div>
        <h3 className="title">EDUCATIONS</h3>
        <EducationList />
      </div>
    )
  },
  {
    id: "tab-download",
    label: "Download",
    icon: "icon-download",
    bg: `/resume/skill.png`,
    content: (
      <div style={{padding: `15px 30px;`}}>
        <h3 className="title">Hire me</h3>
        <div>
          <li class="view view-second commercial" id="my-resume">
            <img src={process.env.PUBLIC_URL + '/hireme.png'} alt="11" />
            <div class="mask"></div>
            <div class="content">
              <h2>Know Me More</h2>
              <a role="button" class="info" target="_blank" rel="noopener noreferrer"
                href={process.env.PUBLIC_URL + '/Yuqi_Sui_resume.pdf'}>Download</a>
            </div>
          </li>
        </div>
      </div>
    )
  },

]
const Resume = () => {
  const [activeTab, setActiveTab] = useState("tab-skills");
  return (
    <li id="resume" className="selected">
      <div className="title-container">
        <div className="shadow-img"></div>
        <h2 className="rotate-out rotated">
          <span className="invert">Resume Of</span> Yuqi Sui
        </h2>
      </div>
      <div className="description">
        <div className="tabs tabs_animate">
          {/* TAB LISTS */}
          <div className="tabs-list-container">
            <ul className="horizontal no-padding">
              {tabData.map((tab) => (
                <li key={tab.id} className={`${activeTab === tab.id ? "active" : ""}`}>
                  <a
                    className={`icon-bg ${tab.icon}`}
                    onClick={() => setActiveTab(tab.id)}
                    style={{
                      backgroundImage: `url(${process.env.PUBLIC_URL + tab.bg})`,
                    }}
                  >
                    <div>{tab.label}</div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* TAB CONTENT */}

          {tabData.map(
            (tab) =>
              activeTab === tab.id && (
                <div key={tab.id} id={tab.id}>
                  {tab.content}
                </div>
              )
          )}
        </div>
      </div>
    </li>
  );
};

export default Resume;