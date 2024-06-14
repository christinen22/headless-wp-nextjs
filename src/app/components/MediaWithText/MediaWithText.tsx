import { MediaWithTextBlock } from "@/app/lib/types";

interface MediaWithTextBlockProps {
  mediaWithText: MediaWithTextBlock["mediaWithText"];
}

const MediaWithText: React.FC<MediaWithTextBlockProps> = ({
  mediaWithText,
}) => {
  const { image, title, text, url } = mediaWithText;
  return (
    <section className="media-text-section fade-element">
      <div className="media-text-container">
        <div className="media-text-content">
          <h1 className="media-text-title">{title}</h1>
          <p className="media-text-description">{text}</p>
          <a href={url} className="button">
            Discover our collections
          </a>
        </div>
        <div className="media-text-image">
          {image && (
            <img src={image.node.mediaItemUrl} alt={title} className="media" />
          )}
        </div>
      </div>
    </section>
  );
};

export default MediaWithText;
