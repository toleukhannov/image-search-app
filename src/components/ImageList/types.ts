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
}
