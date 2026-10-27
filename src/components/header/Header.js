import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  bigProjects,
  achievementSection,
  ongoingProjects,
  entrepreneurshipSection,
  mediaGallerySection
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const sections = [
    {show: skillsSection.display, href: "#skills", label: "技能"},
    {show: workExperiences.display, href: "#experience", label: "校园任职"},
    {show: bigProjects.display, href: "#projects", label: "项目作品"},
    {
      show: achievementSection.display,
      href: "#achievements",
      label: "成果荣誉"
    },
    {show: mediaGallerySection.display, href: "#gallery", label: "影像"},
    {show: ongoingProjects.display, href: "#ongoing", label: "参赛中"},
    {
      show: entrepreneurshipSection.display,
      href: "#entrepreneurship",
      label: "创业实践"
    }
  ];

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="#greeting" className="logo" aria-label="梁潇的个人主页">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          aria-label="展开导航菜单"
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {sections
            .filter(section => section.show)
            .map(section => (
              <li key={section.href}>
                <a href={section.href}>{section.label}</a>
              </li>
            ))}
          <li>
            <a href="#contact">关于我</a>
          </li>
          <li className="theme-toggle">
            <ToggleSwitch />
          </li>
        </ul>
      </header>
    </Headroom>
  );
}

export default Header;
