import React, {useContext} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function StartupProject({
  section = bigProjects,
  id = "projects"
}) {
  const {isDark} = useContext(StyleContext);
  if (!section || !section.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id={id}>
        <div>
          <h1 className="skills-heading">{section.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {section.subtitle}
          </p>

          <div className="projects-container">
            {section.projects.map((project, i) => {
              return (
                <div
                  key={i}
                  className={
                    isDark
                      ? "dark-mode project-card project-card-dark"
                      : "project-card project-card-light"
                  }
                >
                  {project.video ? (
                    <video
                      className="project-video"
                      controls
                      playsInline
                      preload="none"
                      poster={project.video.poster}
                      aria-label={`${project.projectName}：${project.video.title}`}
                    >
                      <source src={project.video.src} type="video/mp4" />
                      你的浏览器不支持视频播放，请通过下方链接打开视频。
                    </video>
                  ) : project.image ? (
                    <div
                      className={`project-image${
                        project.imageRotation === -90
                          ? " project-image-rotated"
                          : ""
                      }`}
                    >
                      <img
                        src={project.image}
                        alt={project.imageAlt || project.projectName}
                        className={`card-image${
                          project.imageRotation === -90
                            ? " project-image-rotate-left"
                            : ""
                        }`}
                        loading="lazy"
                        decoding="async"
                      ></img>
                    </div>
                  ) : project.icon ? (
                    <div className="project-icon" aria-hidden="true">
                      <i className={project.icon}></i>
                    </div>
                  ) : null}
                  <div className="project-detail">
                    {project.status && (
                      <span className="project-status">{project.status}</span>
                    )}
                    <h5
                      className={isDark ? "dark-mode card-title" : "card-title"}
                    >
                      {project.projectName}
                    </h5>
                    <p
                      className={
                        isDark ? "dark-mode card-subtitle" : "card-subtitle"
                      }
                    >
                      {project.projectDesc}
                    </p>
                    {project.footerLink && project.footerLink.length > 0 ? (
                      <div className="project-card-footer">
                        {project.footerLink.map((link, i) => {
                          return (
                            <a
                              key={i}
                              className={
                                isDark ? "dark-mode project-tag" : "project-tag"
                              }
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {link.name}
                            </a>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
