import { useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Observer } from "gsap/Observer";
import { Flip } from "gsap/Flip";

const sidebarNavs = [
  { name: "Home", href: "#landing-start", visible: "#landing-start" },
  { name: "About", href: "#about", visible: "#about-header" },
  { name: "Projects", href: "#projects", visible: "#project-header" },
  { name: "Skills", href: "#skills", visible: "#skills-header" },
  { name: "Contact", href: "#contact", visible: "#contact-header" },
];

const SidebarMedia = () => {
  const CheckAndApplyCuurentNavClass = () => {
    for (let index = 0; index < sidebarNavs.length; index++) {
      const nav = sidebarNavs[index];

      if (ScrollTrigger.isInViewport(nav.visible)) {
        const activeDom = document.querySelector(".sidebar-current-section");
        const activeState = Flip.getState(activeDom);
        const parentDom = document.querySelector(`#${nav.name}-sidebar-nav`);
        parentDom.appendChild(activeDom);

        Flip.to(activeState, {
          duration: 0.5,
          // absolute: true,
        });

        break;
      }
    }
  };

  useLayoutEffect(() => {
    const ob = Observer.create({
      target: window, // can be any element (selector text is fine)
      type: "wheel,touch,scroll", // comma-delimited list of what to listen for ("wheel,touch,scroll,pointer")
      onUp: CheckAndApplyCuurentNavClass,
      onDown: CheckAndApplyCuurentNavClass,
      onChangeY: CheckAndApplyCuurentNavClass,
      onChange: CheckAndApplyCuurentNavClass,
    });
  });

  return (
    <div className="sidebar-media">
      <div className="sidebar-line">
        <div className="navigation-link">
          <ul>
            {sidebarNavs.map((nav, i) => (
              <li id={`${nav.name}-sidebar-nav`}>
                {i == 0 && <div className="sidebar-current-section"></div>}
                <a href={nav.visible}>{nav.name}</a>
              </li>
            ))}

            {/* <li id="home-sidebar-nav">
              <div className="sidebar-current-section"></div>
              <a href="#home">Home</a>
            </li>
            <li id="about-sidebar-nav">
              <a href="#about">About</a>
            </li>
            <li id="projects-sidebar-nav">
              <a href="#projects">Projects</a>
            </li>
            <li id="skills-sidebar-nav">
              <a href="#skills">Skills</a>
            </li>
            <li id="contact-sidebar-nav">
              <a href="#contact">Contact</a>
            </li> */}
          </ul>
        </div>
      </div>
      <div className="sidebar-arrow-circle">
        <div className="sidebar-array" />
        <div className="sidebar-circle" />
      </div>
    </div>
  );
};

export default SidebarMedia;
