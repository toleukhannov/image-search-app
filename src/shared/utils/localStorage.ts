import type { UnsplashImage } from "../types/types";

export const saveToFavourites = (image: UnsplashImage) => {
    const stored = localStorage.getItem("favourites");
    const current = stored ? JSON.parse(stored) : [];
    const exists = current.some((item: UnsplashImage) => item.id === image.id);
    if (!exists) {
        const updated = [...current, image];
        localStorage.setItem("favourites", JSON.stringify(updated));
    }
};