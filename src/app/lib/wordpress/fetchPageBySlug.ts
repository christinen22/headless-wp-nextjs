import { graphQLConfigs } from '../graphqlConfig';
import { formatGQLQuery } from '../formatQuery';

export const WORDPRESS_GET_PAGE_BY_SLUG =
  `
  query fetchPageBySlug($uri: String!) {
    pageBy(uri: $uri) {
      title
      content
      editorBlocks {
        __typename
        ... on AcfHero {
          heroSection {
            heroDescription
            heroTitle
            heroUrl
            heroImage {
              node {
                mediaItemUrl
              }
            }
          }
        }
        ... on AcfMediaWithText {
          mediaWithText {
            image {
              node {
                mediaItemUrl
              }
            }
            text
            title
          }
        }
        ... on AcfPageHeader {
          pageHeader {
            image {
              node {
                mediaItemUrl
              }
            }
            title
          }
        }
      }
    }
  }
  `;

export const fetchPageBySlug = async (slug: string) => {
  try {
    const response = await fetch(graphQLConfigs.wordpress.url, {
      method: 'POST',
      headers: graphQLConfigs.wordpress.headers,
      body: JSON.stringify({
        query: formatGQLQuery(WORDPRESS_GET_PAGE_BY_SLUG),
        variables: {
          uri: slug,
        },
      }),
    });


    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }

    const query = await response.json();

    return query?.data.pageBy;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};
