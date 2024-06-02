import { PageHeaderBlock } from "@/app/lib/types";

interface PageHeaderBlockProps {
  pageHeader: PageHeaderBlock["pageHeader"];
}

const PageHeader: React.FC<PageHeaderBlockProps> = ({ pageHeader }) => {
  const { image, title } = pageHeader;
  return (
    <div className="section">
      <div className="container">
        <h1>{title}</h1>
        {image && (
          <img src={image.node.mediaItemUrl} alt={title} className="media" />
        )}
      </div>
    </div>
  );
};

export default PageHeader;
