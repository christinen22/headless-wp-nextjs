import React from "react";
import type {
  EditorBlock,
  HeroBlock,
  MediaWithTextBlock,
  PageHeaderBlock,
} from "../lib/types";
import Hero from "./Hero/Hero";
import MediaWithText from "./MediaWithText/MediaWithText";
import PageHeader from "./PageHeader/PageHeader";

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

    default:
      return null;
  }
};

export default BlockRenderer;
