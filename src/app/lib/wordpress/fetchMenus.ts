import { graphQLConfigs } from '../graphqlConfig';
import { formatGQLQuery } from '../formatQuery';
import { MenusData } from '../types';

const FETCH_MENUS_QUERY = /* GraphQL */ `
  query MyQuery3 {
    menus(where: {location: PRIMARY}) {
      nodes {
        menuItems {
          nodes {
            label
            path
          }
        }
      }
    }
  }
`;


export const fetchMenus = async (): Promise<MenusData | null> => {
  try {
    const response = await fetch(graphQLConfigs.wordpress.url, {
      method: 'POST',
      headers: graphQLConfigs.wordpress.headers,
      body: JSON.stringify({
        query: formatGQLQuery(FETCH_MENUS_QUERY),
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }

    const query = await response.json();

    return query?.data || null;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};
