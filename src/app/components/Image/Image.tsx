import { ImageBlock } from "../../lib/types";

interface ImageProps {
  image: ImageBlock["image"];
}

const Image: React.FC<ImageProps> = ({ image }) => {
  //console.log(image.node.mediaItemUrl);
  return (
    <section className="image-section">
      <div className="card-image"></div>
    </section>
  );
};

export default Image;
