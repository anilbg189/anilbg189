import { useEffect } from "react";
import OutlineHeader from "../common/OutlineHeader";
import ChatbotPreviewImg from "../../static/projects/chatbot/chatbot.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Flip from "gsap/Flip";

const images = require.context("../../static/projects/chatbot", true);
const imageList = images.keys().map((image) => images(image));

const projects = [
  {
    title: "Chatbot .",
    description: [
      "Chat app to resolve users queries. ",
      "Admin app to create chatbot flow with API integration support.",
    ],
    images: [],
    previewImg: ChatbotPreviewImg,
    previewImgWidth: "55%",
  },
  {
    title: "Chatbot",
    description: [
      "Chat app to resolve users queries",
      "Admin app to create chatbot flow with API integration supported.",
    ],
    images: [],
    previewImg: ChatbotPreviewImg,
  },
  {
    title: "Chatbot",
    description: [
      "Chat app to resolve users queries",
      "Admin app to create chatbot flow with API integration supported.",
    ],
    images: [],
    previewImg: ChatbotPreviewImg,
  },
  {
    title: "Chatbot.",
    description: [
      "Chat app to resolve users queries",
      "Admin app to create chatbot flow with API integration supported.",
    ],
    images: [],
    previewImg: ChatbotPreviewImg,
  },
  {
    title: "Chatbot.",
    description: [
      "Chat app to resolve users queries",
      "Admin app to create chatbot flow with API integration supported.",
    ],
    images: [],
    previewImg: ChatbotPreviewImg,
  },
];

const Projects = () => {
  useEffect(() => {
    console.log(
      "project-list: ",
      document.querySelector(".projects-list").offsetWidth,
      document.querySelector(".projects-list-wrapper").offsetWidth
    );
  }, []);

  useGSAP(() => {
    let projectsTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#project-header",
        // markers: true,
        start: "top 80%",

        // onEnter: () => {
        //   console.log("entered");
        //   Flip.fit(".sidebar-current-section", "#projects-sidebar-nav", {
        //     absolute: true,
        //     scale: true,
        //     duration: 0.2,
        //   });
        // },
        // onEnterBack: () => {
        //   console.log("entered back");
        //   Flip.fit(".sidebar-current-section", "#projects-sidebar-nav", {
        //     absolute: true,
        //     scale: true,
        //     duration: 0.2,
        //   });
        // },
      },
    });

    projectsTimeline.from("#project-header", {
      opacity: 0,
      duration: 0.5,
      x: -100,
    });

    projectsTimeline.from(".project", {
      opacity: 0,
      duration: 0.5,
      scale: 1.2,
      stagger: 0.2,
    });

    gsap.to(".projects-list", {
      duration: 0.5,
      x: () =>
        -(
          document.querySelector(".projects-list").offsetWidth -
          document.querySelector(".projects-list-wrapper").offsetWidth
        ),
      delay: 1,
      scrollTrigger: {
        endTrigger: ".projects",
        trigger: ".projects",
        start: "top top",
        end: "bottom center",
        scrub: true,
        // markers: true,
        pin: ".projects",
      },
    });
  });

  return (
    <div className="projects" id="projects">
      <OutlineHeader
        text="<Projects/>"
        style={{ width: "100%", textAlign: "center" }}
        id="project-header"
      />
      <div className="projects-list-arrow-wrapper">
        <div className="projects-list-arrow">{"<"}</div>
        <div className="projects-list-wrapper">
          <div className="projects-list">
            {projects.map((project) => (
              <div className="project-wrapper">
                <p className="project-title">{project.title}</p>
                <div className="project">
                  <div className="open-project">{"----->"}</div>
                  <div className="project-image-wrapper">
                    <img
                      src={project.previewImg}
                      alt=""
                      height=""
                      width=""
                      className="project-image"
                      style={{ width: project.previewImgWidth }}
                    />
                  </div>
                  <div className="project-brief">
                    <p className="project-description">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="projects-list-arrow">{">"}</div>
      </div>
    </div>
  );
};

export default Projects;
