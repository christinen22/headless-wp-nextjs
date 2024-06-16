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

export interface CardsBlock {
    __typename: 'AcfCards';
    cards: {
        repeater: {
            title: string;
            link: string;
            description: string;
            image: {
                node: {
                    mediaItemUrl: string;
                };
            };
        }[];
    };
}

export interface CtaBlock {
    __typename: 'AcfCta';
    cta: {
        contact: {
            title: string;
            url: string;
        }
        readMore: {
            title: string;
            url: string;
        }
        title: string;
    }
}

export interface RichTextBlock {
    __typename: 'AcfRichText';
    richText: {
        title: string;
        content: string;
        link: {
            url: string;
            title: string;
        }
    }
}

export interface ImageBlock {
    __typename: 'AcfImage';
    image: {
        node: {
            mediaItemUrl: string;
        };
    };
}

// Extend this type with more block types
export type EditorBlock = HeroBlock | MediaWithTextBlock | PageHeaderBlock | CardsBlock | CtaBlock | RichTextBlock | ImageBlock;

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
