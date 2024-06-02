"use client";

import { useEffect, useState } from "react";
import { fetchPageBySlug } from "./lib/wordpress/fetchPageBySlug";
import BlockRenderer from "./components/BlockRenderer";
import { Page } from "./lib/types";

const PageComponent: React.FC<{ slug: string }> = ({ slug }) => {
  const [page, setPage] = useState<Page | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pageData = await fetchPageBySlug("/");

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
      <div dangerouslySetInnerHTML={{ __html: page.content }} />
      {page.editorBlocks.map((block, index) => (
        <BlockRenderer key={index} block={block} />
      ))}
    </div>
  );
};

export default PageComponent;
