import { PageHeaderBlock } from "@/app/lib/types";

interface PageHeaderBlockProps {
  pageHeader: PageHeaderBlock["pageHeader"];
}

const PageHeader: React.FC<PageHeaderBlockProps> = ({ pageHeader }) => {
  const { image, title } = pageHeader;
  return (
    <div className="section">
      <div className="pageheader-container">
        <h1 className="pageheader-title">{title}</h1>
        {image && (
          <img
            src={image.node.mediaItemUrl}
            alt={title}
            className="media pageheader-media"
          />
        )}
      </div>
    </div>
  );
};

export default PageHeader;
