import { HeroBlock } from "../../lib/types";

interface HeroProps {
  heroSection: HeroBlock["heroSection"];
}

const Hero: React.FC<HeroProps> = ({ heroSection }) => {
  const { heroTitle, heroDescription, heroUrl, heroImage } = heroSection;
  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${heroImage.node.mediaItemUrl})` }}
    >
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">{heroTitle}</h1>
          <p>{heroDescription}</p>
          <a href={heroUrl} className="button">
            Shop now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
