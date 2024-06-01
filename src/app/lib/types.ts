export interface HeroBlock {
    __typename: 'AcfHero';
    heroSection: {
        heroTitle: string;
        heroDescription: string;
        heroUrl: string;
        heroImage: {
            node: {
                mediaItemUrl: string;
            };
        };
    };
}

// Extend this type with more block types
export type EditorBlock = HeroBlock; /*| TextBlock*/

export interface Page {
    title: string;
    content: string;
    editorBlocks: EditorBlock[];
}

export interface PageProps {
    params: {
        slug: string;
    };
}
