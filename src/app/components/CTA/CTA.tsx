import { CtaBlock } from "../../lib/types";

interface CtaProps {
  cta: CtaBlock["cta"];
}

const CTA: React.FC<CtaProps> = ({ cta }) => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-content">
          <h1 className="cta-title">{cta.title}</h1>
          <div className="cta-buttons">
            <a href={cta.contact.url} className="button">
              {cta.contact.title}
            </a>
            <a href={cta.readMore.url} className="button">
              {cta.readMore.title}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
