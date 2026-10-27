import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "../../emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("梁潇 · 用技术与创意实现想法 ❤️")}
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          基于 DeveloperFolio Team 开源项目 · 主题源自{" "}
          <a
            href="https://github.com/saadpasta/developerFolio"
            target="_blank"
            rel="noreferrer"
          >
            developerFolio
          </a>
          {" · "}
          <a href={`${process.env.PUBLIC_URL}/source.zip`}>本站源码</a>
        </p>
      </div>
    </Fade>
  );
}
