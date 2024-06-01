
export const graphQLConfigs = {
    wordpress: {
        url: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}/graphql`,
        headers: {
            'Content-Type': 'application/json',
        },
    },
};
