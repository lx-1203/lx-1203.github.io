import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import StartupProject from "./containers/StartupProjects/StartupProject";
import MediaGallery from "./containers/mediaGallery/MediaGallery";
import Achievement from "./containers/achievement/Achievement";
import {ongoingProjects} from "./portfolio";
import {StyleProvider} from "./contexts/StyleContext";

beforeEach(() => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn()
    }))
  });
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("keeps the Nanjing competition context beside its animation", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <StyleProvider value={{isDark: false}}>
      <StartupProject section={ongoingProjects} id="ongoing" />
      <MediaGallery />
    </StyleProvider>,
    div
  );
  try {
    const project = Array.from(
      div.querySelectorAll("#ongoing .project-card")
    ).find(card => card.textContent.includes("来斯南京，亲AI的宁"));
    expect(project).toBeDefined();
    expect(project.textContent).toContain("参赛中");
    expect(project.textContent).toContain("负责脚本、文案、剪辑等工作");
    const video = project.querySelector("video");
    expect(video).not.toBeNull();
    expect(video.controls).toBe(true);
    expect(video.querySelector("source").getAttribute("src")).toMatch(
      /\/video-05\.mp4$/
    );

    const galleryCard = div
      .querySelector('.media-gallery source[src$="/video-05.mp4"]')
      .closest("article");
    expect(galleryCard.textContent).toContain("来斯南京，亲AI的宁");
    expect(galleryCard.textContent).toContain("参赛中");
    expect(galleryCard.textContent).toContain("负责脚本、文案、剪辑等工作");
  } finally {
    ReactDOM.unmountComponentAtNode(div);
  }
});

it("shows Yuanqi Cube and its award once in the same project card", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <StyleProvider value={{isDark: false}}>
      <StartupProject />
      <Achievement />
    </StyleProvider>,
    div
  );
  try {
    const card = Array.from(
      div.querySelectorAll("#projects .project-card")
    ).find(item => item.querySelector("h5").textContent === "元气立方");
    expect(card.textContent).toContain("负责网站开发");
    expect(card.textContent).toContain("2026年振兴杯校赛三等奖");
    const image = card.querySelector('img[src$="/yuanqi-cube-award.jpg"]');
    expect(image).not.toBeNull();
    expect(image.className).toContain("project-image-rotate-left");
    expect(
      div.querySelectorAll('img[src$="/yuanqi-cube-award.jpg"]')
    ).toHaveLength(1);
    expect(
      card.querySelector('a[href$="/yuanqi-cube-award.jpg"]')
    ).not.toBeNull();
  } finally {
    ReactDOM.unmountComponentAtNode(div);
  }
});
