import type { HeroBlock } from "../../lib/types";

interface HeroBlockProps {
  heroSection: HeroBlock["heroSection"];
}

const Hero: React.FC<HeroBlockProps> = ({ heroSection }) => {
  const { heroTitle, heroDescription, heroUrl, heroImage } = heroSection;
  return (
    <div className="section">
      <div className="container">
        {heroImage && (
          <img
            src={heroImage.node.mediaItemUrl}
            alt={heroTitle}
            className="media"
          />
        )}
        <h1>{heroTitle}</h1>
        <p>{heroDescription}</p>
        {heroUrl && (
          <a href={heroUrl} className="button">
            Learn More
          </a>
        )}
      </div>
    </div>
  );
};

export default Hero;
