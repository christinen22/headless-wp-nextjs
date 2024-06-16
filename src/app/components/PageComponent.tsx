"use client";

import { useEffect, useState } from "react";
import { fetchPageBySlug } from "../lib/wordpress/fetchPageBySlug";
import BlockRenderer from "./BlockRenderer";
import { Page } from "../lib/types";
import { useInView } from "react-intersection-observer";

const FadeInSection: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`fade-element ${inView ? "fade-in" : "fade-out"}`}
    >
      {children}
    </div>
  );
};

const PageComponent: React.FC<{ slug: string }> = ({ slug }) => {
  const [page, setPage] = useState<Page | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pageData = await fetchPageBySlug(slug);

        pageData.editorBlocks.forEach((block: any, index: number) => {});

        setPage(pageData);
      } catch (error) {
        setError("Error fetching page data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  if (!page) {
    return <div>Page not found</div>;
  }

  return (
    <div>
      <FadeInSection>
        <div dangerouslySetInnerHTML={{ __html: page.content }} />
      </FadeInSection>
      {page.editorBlocks.map((block, index) => (
        <FadeInSection key={index}>
          <BlockRenderer key={index} block={block} />
        </FadeInSection>
      ))}
    </div>
  );
};

export default PageComponent;
