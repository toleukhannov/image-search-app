import { useEffect, useState } from "react";
import type { FC } from "react";
import type { UnsplashImage } from "../../shared/types/types";
import ImageListItem from "../ImageList/Item";

const Favourites: FC = () => {
    const [favourites, setFavourites] = useState<UnsplashImage[]>([]);

    useEffect(() => {
        const stored = localStorage.getItem("favourites");
        if (stored) {
            try {
                setFavourites(JSON.parse(stored));
            } catch (e) {
                console.error("Ошибка парсинга избранного:", e);
            }
        }
    }, []);

    return (
        <div className="container">
            <h1 className="title">Избранное</h1>
            {favourites.length === 0 ? (
                <p>Нет избранных изображений.</p>
            ) : (
                <div className="image-list">
                    {favourites.map((image) => (
                        <ImageListItem key={image.id} image={image} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Favourites;
