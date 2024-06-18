import React from "react";
import type {
  EditorBlock,
  HeroBlock,
  MediaWithTextBlock,
  PageHeaderBlock,
  CardsBlock,
  CtaBlock,
  RichTextBlock,
  ImageBlock,
  ImageGalleryBlock,
} from "../lib/types";
import Hero from "./Hero/Hero";
import MediaWithText from "./MediaWithText/MediaWithText";
import PageHeader from "./PageHeader/PageHeader";
import Cards from "./Cards/Cards";
import CTA from "./CTA/CTA";
import RichText from "./RichText/RichText";
import Image from "./Image/Image";
import ImageGallery from "./ImageGallery/ImageGallery";

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
    case "AcfRichText":
      return <RichText richText={(block as RichTextBlock).richText} />;
    case "AcfImage":
      return <Image image={(block as ImageBlock).image} />;
    case "AcfImageGallery":
      return (
        <ImageGallery
          imageGallery={(block as ImageGalleryBlock).imageGallery}
        />
      );
    default:
      return null;
  }
};

export default BlockRenderer;
