"use client";

import { useEffect, useState } from "react";
import { fetchPageBySlug } from "../lib/wordpress/fetchPageBySlug";
import BlockRenderer from "./BlockRenderer";
import type { Page } from "../lib/types";

const PageComponent: React.FC<{ slug: string }> = ({ slug }) => {
  const [page, setPage] = useState<Page | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pageData = await fetchPageBySlug(slug);
        console.log("Fetched page data:", pageData); // Inspect the fetched data

        // Log each block's structure
        pageData.editorBlocks.forEach((block: any, index: number) => {
          console.log(`Block ${index}:`, block);
        });

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
      <h1>{page.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: page.content }} />
      {page.editorBlocks.map((block, index) => (
        <BlockRenderer key={index} block={block} />
      ))}
    </div>
  );
};

export default PageComponent;
