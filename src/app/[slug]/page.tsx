import PageComponent from "../components/PageComponent";

interface PageProps {
  params: { slug: string };
}

const Page: React.FC<PageProps> = ({ params }) => {
  return <PageComponent slug={params.slug} />;
};

export default Page;
