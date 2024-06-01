import React from "react";
import type { HeroBlock } from "../../lib/types";

interface HeroBlockProps {
  heroSection: HeroBlock["heroSection"];
}

const Hero: React.FC<HeroBlockProps> = ({ heroSection }) => {
  const { heroTitle, heroDescription, heroUrl, heroImage } = heroSection;
  return (
    <div className="hero-section">
      {heroImage && <img src={heroImage.node.mediaItemUrl} alt={heroTitle} />}
      <h1>{heroTitle}</h1>
      <p>{heroDescription}</p>
      {heroUrl && (
        <a href={heroUrl} className="button">
          Learn More
        </a>
      )}
    </div>
  );
};

export default Hero;
