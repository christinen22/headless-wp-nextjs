import { ImageGalleryBlock } from "../../lib/types";

interface ImageGalleryProps {
  imageGallery: ImageGalleryBlock["imageGallery"];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ imageGallery }) => {
  return (
    <section className="image-gallery-section">
      <div className="image-gallery-container">
        <span className="image-gallery-intro">{imageGallery.intro}</span>
        <h1 className="imageGallery-title">{imageGallery.title}</h1>
        {imageGallery.images.nodes.map((imageGallery, index) => (
          <div className="imageGallery" key={index}>
            <div className="imageGallery-container">
              <div className="imageGallery-content">
                <div className="imageGallery-image">
                  {imageGallery.mediaItemUrl && (
                    <img
                      src={imageGallery.mediaItemUrl}
                      //alt={imageGallery.title}
                      className="media"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageGallery;
