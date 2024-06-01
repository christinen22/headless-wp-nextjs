import React from "react";
import type { EditorBlock, HeroBlock } from "../lib/types";
import Hero from "./Hero/Hero";
// import TextBlockComponent from './TextBlock';

interface BlockRendererProps {
  block: EditorBlock;
}

const BlockRenderer: React.FC<BlockRendererProps> = ({ block }) => {
  console.log("Rendering block:", block); // Log block rendering
  switch (block.__typename) {
    case "AcfHero":
      return <Hero heroSection={(block as HeroBlock).heroSection} />;
    // case 'AcfTextBlock':
    //   return <TextBlockComponent textSection={(block as TextBlock).textSection} />;
    default:
      return null;
  }
};

export default BlockRenderer;
