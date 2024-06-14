import React from "react";
import type {
  EditorBlock,
  HeroBlock,
  MediaWithTextBlock,
  PageHeaderBlock,
  CardsBlock,
  CtaBlock,
} from "../lib/types";
import Hero from "./Hero/Hero";
import MediaWithText from "./MediaWithText/MediaWithText";
import PageHeader from "./PageHeader/PageHeader";
import Cards from "./Cards/Cards";
import CTA from "./CTA/CTA";

interface BlockRendererProps {
  block: EditorBlock;
}

const BlockRenderer: React.FC<BlockRendererProps> = ({ block }) => {
  switch (block.__typename) {
    case "AcfHero":
      return <Hero heroSection={(block as HeroBlock).heroSection} />;
    case "AcfMediaWithText":
      return (
        <MediaWithText
          mediaWithText={(block as MediaWithTextBlock).mediaWithText}
        />
      );
    case "AcfPageHeader":
      return <PageHeader pageHeader={(block as PageHeaderBlock).pageHeader} />;
    case "AcfCards":
      return <Cards cards={(block as CardsBlock).cards} />;
    case "AcfCta":
      return <CTA cta={(block as CtaBlock).cta} />;
    default:
      return null;
  }
};

export default BlockRenderer;
