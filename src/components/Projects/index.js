import React from "react";
import OutlineHeader from "../common/OutlineHeader";
import ChatbotPreviewImg from "../../static/projects/chatbot/chatbot.png";

const images = require.context("../../static/projects/chatbot", true);
const imageList = images.keys().map((image) => images(image));

const projects = [
  {
    title: "Chatbot .",
    description: [
      "Chat app to resolve users queries",
      "Admin app to create chatbot flow with API integration supported.",
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
];

const Projects = () => {
  return (
    <div className="projects">
      <OutlineHeader
        text="<Projects/>"
        style={{ width: "100%", textAlign: "center" }}
      />
      <div className="projects-list-wrapper">
        <div className="projects-list">
          {projects.map((project) => (
            <div className="project-wrapper">
              <p className="project-title">{project.title}</p>
              <div className="project">
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
    </div>
  );
};

export default Projects;
