export interface UnsplashImage {
    id: string;
    alt_description: string;
    urls: {
        raw: string;
        full: string;
        regular: string;
        small: string;
        thumb: string;
    };
    user: {
        id: string;
        name: string;
        username: string;
        profile_image: {
            small: string;
            medium: string;
            large: string;
        }
    }
    links: {
        download: string;
    }
}
