import { useEffect } from "react";
import $ from "jquery";
import "isotope-layout";
import ProgressBar from "progressbar.js";

export const usePageTransition = () => {
  useEffect(() => {
    const centerContent = () => {
      const content = $("#content");
      const frontMain = $("#frontpage");

      if (window.innerWidth > 767) {
        content.css("top", (window.innerHeight - content.height()) / 2);
      } else {
        content.css("top", 15);
      }
      if (window.innerHeight > frontMain.height()) {
        frontMain.css("top", (window.innerHeight - frontMain.height()) / 2);
      } else {
        frontMain.css("top", 15);
      }
    };

    $(window).on("load", () => {
      $(".loading-screen").fadeOut("slow");
      centerContent();
    });

    $(window).on("resize", () => {
      if (window.innerWidth > 767) {
        $(".description").css("-webkit-transform", "none");
        $(".description").css("height", "475px");
      } else {
        $(".description").css("height", "auto");
      }
      centerContent();
    });

    return () => {
      $(window).off("load");
      $(window).off("resize");
    };
  }, []);
};