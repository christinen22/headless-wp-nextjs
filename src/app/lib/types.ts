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

export interface MediaWithTextBlock {
    __typename: 'AcfMediaWithText';
    mediaWithText: {
        image: {
            node: {
                mediaItemUrl: string;
            }
        }
        text: string,
        title: string,
        url: string,
    }
};

export interface PageHeaderBlock {
    __typename: 'AcfPageHeader';
    pageHeader: {
        image: {
            node: {
                mediaItemUrl: string;
            }
        }
        title: string
    }
}

// Extend this type with more block types
export type EditorBlock = HeroBlock | MediaWithTextBlock | PageHeaderBlock;

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

export interface MenuItem {
    label: string;
    path: string;
}

export interface Menu {
    menuItems: {
        nodes: MenuItem[];
    };
}

export interface MenusData {
    menus: {
        nodes: Menu[];
    };
}
