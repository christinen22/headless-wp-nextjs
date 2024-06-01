export const formatGQLQuery = (query: string): string => {
    return query.replace(/\s+/g, ' ').trim();
};
