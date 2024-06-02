import { MediaWithTextBlock } from "@/app/lib/types";

interface MediaWithTextBlockProps {
  mediaWithText: MediaWithTextBlock["mediaWithText"];
}

const MediaWithText: React.FC<MediaWithTextBlockProps> = ({
  mediaWithText,
}) => {
  const { image, text, title } = mediaWithText;
  return (
    <div className="section">
      <div className="container">
        {image && (
          <img src={image.node.mediaItemUrl} alt={title} className="media" />
        )}
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default MediaWithText;
