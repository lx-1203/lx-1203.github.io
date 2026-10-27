import React from "react";
import "./AchievementCard.scss";

export default function AchievementCard({cardInfo, isDark}) {
  const footer = cardInfo.footer || [];
  const images =
    cardInfo.images ||
    (cardInfo.image
      ? [
          {
            src: cardInfo.image,
            alt: cardInfo.imageAlt,
            rotation: cardInfo.imageRotation
          }
        ]
      : []);
  return (
    <div className={isDark ? "dark-mode certificate-card" : "certificate-card"}>
      {images.length > 0 ? (
        <div
          className={`certificate-image-div${
            images.length > 1 ? " certificate-image-group" : ""
          }`}
        >
          {images.map(image => (
            <a
              key={image.src}
              className="certificate-image-link"
              href={image.src}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`查看${image.label || cardInfo.title}原图`}
            >
              <img
                src={image.src}
                alt={image.alt || cardInfo.title}
                className={`card-image${
                  image.rotation === -90 ? " card-image-rotate-left" : ""
                }`}
                loading="lazy"
                decoding="async"
              />
              {image.label && (
                <span className="certificate-image-caption">{image.label}</span>
              )}
            </a>
          ))}
        </div>
      ) : (
        <div
          className="certificate-image-div certificate-icon-div"
          aria-hidden="true"
        >
          <i className={cardInfo.icon || "fas fa-award"}></i>
        </div>
      )}
      <div className="certificate-detail-div">
        <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
          {cardInfo.title}
        </h5>
        <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
          {cardInfo.description}
        </p>
      </div>
      {footer.length > 0 && (
        <div className="certificate-card-footer">
          {footer.map((item, i) =>
            item.url ? (
              <a
                key={i}
                className={
                  isDark ? "dark-mode certificate-tag" : "certificate-tag"
                }
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.name}
              </a>
            ) : (
              <span key={i} className="certificate-tag certificate-tag-static">
                {item.name}
              </span>
            )
          )}
        </div>
      )}
    </div>
  );
}
