import { RichTextBlock } from "../../lib/types";

interface RichTextProps {
  richText: RichTextBlock["richText"];
}

const RichText: React.FC<RichTextProps> = ({ richText }) => {
  return (
    <section className="rich-text-section">
      <div className="rich-text-container">
        <h1 className="rich-text-title">{richText.title}</h1>
        <p
          className="rich-text-content"
          dangerouslySetInnerHTML={{ __html: richText.content }}
        ></p>
        <a href={richText.link.url} className="button">
          {richText.link.title}
        </a>
      </div>
    </section>
  );
};

export default RichText;
