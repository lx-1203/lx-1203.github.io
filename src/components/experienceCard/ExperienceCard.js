import React, {useState, createRef} from "react";
import "./ExperienceCard.scss";
import ColorThief from "colorthief";

export default function ExperienceCard({cardInfo, isDark}) {
  const [colorArrays, setColorArrays] = useState([]);
  const imgRef = createRef();

  function getColorArrays() {
    if (!imgRef.current) {
      return;
    }
    const colorThief = new ColorThief();
    setColorArrays(colorThief.getColor(imgRef.current));
  }

  function rgb(values) {
    return !values || values.length !== 3
      ? undefined
      : "rgb(" + values.join(", ") + ")";
  }

  const GetDescBullets = ({descBullets, isDark}) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li
            key={i}
            className={isDark ? "subTitle dark-mode-text" : "subTitle"}
          >
            {item}
          </li>
        ))
      : null;
  };

  return (
    <div className={isDark ? "experience-card-dark" : "experience-card"}>
      <div
        style={{background: rgb(colorArrays)}}
        className={
          cardInfo.companylogo
            ? "experience-banner"
            : "experience-banner experience-role-banner"
        }
      >
        <div className="experience-blurred_div"></div>
        <div className="experience-div-company">
          <h5 className="experience-text-company">{cardInfo.company}</h5>
        </div>

        {cardInfo.companylogo ? (
          <img
            crossOrigin={"anonymous"}
            ref={imgRef}
            className="experience-roundedimg"
            src={cardInfo.companylogo}
            alt={cardInfo.company}
            onLoad={getColorArrays}
          />
        ) : (
          <div
            className="experience-roundedimg experience-role-icon"
            aria-hidden="true"
          >
            <i className={cardInfo.icon || "fas fa-users"}></i>
          </div>
        )}
      </div>
      <div className="experience-text-details">
        <h5
          className={
            isDark
              ? "experience-text-role dark-mode-text"
              : "experience-text-role"
          }
        >
          {cardInfo.role}
        </h5>
        {cardInfo.date && (
          <h5
            className={
              isDark
                ? "experience-text-date dark-mode-text"
                : "experience-text-date"
            }
          >
            {cardInfo.date}
          </h5>
        )}
        {cardInfo.desc && (
          <p
            className={
              isDark
                ? "subTitle experience-text-desc dark-mode-text"
                : "subTitle experience-text-desc"
            }
          >
            {cardInfo.desc}
          </p>
        )}
        {cardInfo.descBullets && cardInfo.descBullets.length > 0 && (
          <ul>
            <GetDescBullets
              descBullets={cardInfo.descBullets}
              isDark={isDark}
            />
          </ul>
        )}
      </div>
    </div>
  );
}
