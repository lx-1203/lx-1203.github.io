import React, {useContext} from "react";
import {Fade} from "react-reveal";
import {mediaGallerySection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import {buildDrawingTimeline} from "./drawingTimeline";
import "./MediaGallery.scss";

function MediaCard({item, headingLevel = "h3"}) {
  const Title = headingLevel;
  if (item.type === "photo") {
    return (
      <figure className="media-gallery-card">
        <a
          className="media-gallery-photo-link"
          href={item.src}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`查看原图：${item.title}`}
        >
          <img
            className={`media-gallery-photo media-gallery-photo-${
              item.fit === "cover" ? "cover" : "contain"
            }`}
            src={item.src}
            alt={item.alt}
            width={item.width}
            height={item.height}
            loading="lazy"
            decoding="async"
          />
        </a>
        <figcaption className="media-gallery-caption">
          <Title>{item.title}</Title>
          <span className="media-gallery-hint">点击图片查看原图</span>
        </figcaption>
      </figure>
    );
  }

  return (
    <article className="media-gallery-card">
      <video
        className="media-gallery-video"
        controls
        playsInline
        preload="none"
        poster={item.poster}
        aria-label={item.title}
      >
        <source src={item.src} type="video/mp4" />
        你的浏览器不支持视频播放，请通过下方链接打开视频。
      </video>
      <div className="media-gallery-caption">
        <Title>{item.title}</Title>
        {item.description && <p>{item.description}</p>}
        <a
          className="media-gallery-video-link"
          href={item.src}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`打开视频：${item.title}`}
        >
          打开视频 <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}

function DrawingTimeline({items}) {
  return (
    <div className="drawing-timeline">
      {buildDrawingTimeline(items).map(group => (
        <section
          className="drawing-timeline-year"
          key={group.year || "undated"}
          aria-labelledby={`drawing-year-${group.year || "undated"}`}
        >
          <h3 id={`drawing-year-${group.year || "undated"}`}>
            {group.year || "未标注日期"}
          </h3>
          <ol className="drawing-timeline-entries">
            {group.entries.map(entry => (
              <li
                className={`drawing-timeline-entry${
                  entry.date ? "" : " drawing-timeline-entry-undated"
                }`}
                key={entry.date || "undated"}
              >
                {entry.date && (
                  <div className="drawing-timeline-date">
                    <time dateTime={entry.date}>
                      {entry.date.slice(5).replace("-", ".")}
                    </time>
                  </div>
                )}
                <div className="media-gallery-grid">
                  {entry.items.map(item => (
                    <MediaCard key={item.src} item={item} headingLevel="h4" />
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </section>
      ))}
    </div>
  );
}

export default function MediaGallery() {
  const {isDark} = useContext(StyleContext);
  const section = mediaGallerySection;

  if (!section || !section.display) {
    return null;
  }

  const photosByFile = new Map(
    section.photos.map(photo => [photo.src.split("/").pop(), photo])
  );
  const videosByFile = new Map(
    section.videos.map(video => [video.src.split("/").pop(), video])
  );
  const categories = section.categories.map(category => ({
    ...category,
    items: [
      ...category.photoFiles.map(file => ({
        ...photosByFile.get(file),
        type: "photo"
      })),
      ...category.videoFiles.map(file => ({
        ...videosByFile.get(file),
        type: "video"
      }))
    ]
  }));

  return (
    <Fade bottom duration={1000} distance="20px" fraction={0}>
      <section
        className={`main media-gallery${isDark ? " media-gallery-dark" : ""}`}
        id="gallery"
        aria-labelledby="media-gallery-title"
      >
        <h1 className="skills-heading" id="media-gallery-title">
          {section.title}
        </h1>
        <p className="media-gallery-subtitle">{section.subtitle}</p>

        <nav className="media-gallery-nav" aria-label="作品分类">
          {categories.map(category => (
            <a key={category.id} href={`#gallery-${category.id}`}>
              {category.title}
            </a>
          ))}
        </nav>

        {categories.map(category => (
          <section
            className="media-gallery-category"
            id={`gallery-${category.id}`}
            aria-labelledby={`gallery-${category.id}-title`}
            key={category.id}
          >
            <h2 id={`gallery-${category.id}-title`}>{category.title}</h2>
            <p className="media-gallery-category-description">
              {category.description}
            </p>
            {category.id === "drawing" ? (
              <DrawingTimeline items={category.items} />
            ) : (
              <div className="media-gallery-grid">
                {category.items.map(item => (
                  <MediaCard key={item.src} item={item} />
                ))}
              </div>
            )}
          </section>
        ))}
      </section>
    </Fade>
  );
}
