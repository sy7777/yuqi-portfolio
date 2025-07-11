// import React, { useState, useEffect } from "react";
// import $ from "jquery";
// import { usePageTransition } from "../../hooks/usePageTransition";
// import "./frontPage.css"; // Ensure this path is correct
// // import "./frontPage.css";
// const FrontPage = () => {
//   usePageTransition();
//   // State to manage the rotating text
//   const [textIndex, setTextIndex] = useState(0);
//   const rotatingTexts = ["Frontend Developer", "Designer"];
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTextIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length);
//     }, 1000); // Change text every 2 seconds

//     return () => clearInterval(interval); // Cleanup on unmount
//   });

//   const hideFront = () => {
//     const frontPage = $("#frontpage");
//     const frontPageContent = $("#content");
//     const pageHome = $("#home");
//     const pageHomeDesc = pageHome.find(".description");
//     const homeTitleContainer = pageHome.find(".title-container");

//     frontPage.find(".front-img").css("opacity", 0);

//     if (window.innerWidth > 767) {
//       const top = frontPage.position().top - (window.innerHeight - 620) / 2;
//       frontPage.animate(
//         {
//           translate: {
//             x: -287,
//             y: -top,
//           },
//           width: "256px",
//           height: "300px",
//         },
//         1000,
//         () => {
//           frontPage.addClass("hidden");
//           frontPageContent.removeClass("hidden");
//         }
//       );
//     } else {
//       const top = frontPage.position().top - 15;
//       frontPage.animate(
//         {
//           translate: {
//             y: -top,
//           },
//           height: "300px",
//         },
//         500,
//         () => {
//           frontPage.addClass("hidden");
//           frontPageContent.removeClass("hidden");
//         }
//       );
//     }

//     frontPage.find("h1").animate(
//       {
//         translate: {
//           y: -150,
//         },
//       },
//       500
//     );

//     frontPage.find("h3").animate(
//       {
//         translate: {
//           y: -150,
//         },
//       },
//       500
//     );

//     frontPageContent.find("#menu-container").animate(
//       {
//         translate: {
//           y: 0,
//         },
//         opacity: 1,
//       },
//       500,
//       () => {
//         homeTitleContainer.removeClass("hidden");
//         $("#profile-img").removeClass("transparent");
//       }
//     );

//     homeTitleContainer.animate(
//       {
//         translate: {
//           y: 0,
//         },
//         opacity: 1,
//       },
//       500,
//       () => {
//         pageHomeDesc.removeClass("hidden");
//       }
//     );

//     pageHomeDesc.animate(
//       {
//         translate: {
//           y: 0,
//         },
//         opacity: 1,
//       },
//       500,
//       () => {
//         pageHome.find(".fade-text").removeClass("transparent");
//         pageHome.find("ul.personal-info li.rotate-out").removeClass("rotated");
//       }
//     );
//   };

//   return (
//     <div id="frontpage" onClick={hideFront}>
//       <div className="shadow-img"></div>
//       <img src={process.env.PUBLIC_URL + "/front-image.jpg"} className="front-img img-responsive" alt="Front-image" />
//       <h1>
//         Yuqi <span className="invert">Sui</span>
//       </h1>
//       <h3 className="invert" style={{ marginTop: "-10px", marginBottom: "10px" }}>
//         Web <span className="rotate">{rotatingTexts[textIndex]}</span>
//       </h3>
//       <div className="frontclick">
//         <img src={process.env.PUBLIC_URL + "/click.png"} alt="" className="img-responsive" />
//         <span className="pulse">hhhhh</span>
//       </div>
//     </div>
//   );
// };

// export default FrontPage;
import React, { useState, useEffect } from "react";
import "./frontPage.css";

const FrontPage = ({ onHideFront }) => {
  const [textIndex, setTextIndex] = useState(0);
  const rotatingTexts = ["Frontend Developer", "Designer"];
  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length);
    }, 1000); // Change text every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  });
  return (
    <div id="frontpage" onClick={onHideFront}>
      <div className="shadow-img"></div>
      <img src={process.env.PUBLIC_URL + "/front-image.jpg"} className="front-img img-responsive" alt="Front-image" />
      <h1>
        Yuqi <span className="invert">Sui</span>
      </h1>
      <h3 className="invert" style={{ marginTop: "-10px", marginBottom: "10px" }}>
        Web/UI <span className="rotate">{rotatingTexts[textIndex]}</span>
      </h3>
      <div className="frontclick">
        <img src={process.env.PUBLIC_URL + "/click.png"} alt="" className="img-responsive" />
        <span className="pulse"></span>
      </div>
    </div>
  );
};

export default FrontPage;