// libraries
import type { FC } from "react";
import { useNavigate } from "react-router-dom";
// types
import type { UnsplashImage } from "../../shared/types/types";
// components
import ImageListItem from "./Item";

interface Props {
    images: UnsplashImage[];
    loading: boolean;
    query: string;
}

const ImageList: FC<Props> = ({ images, loading, query }) => {
    const navigate = useNavigate();
    const handleClick = (image: UnsplashImage) => {
        navigate(`/photo/${image.id}`, { state: image });
    };
    return (
        <div className="container search-results">
            {loading && <p>Загрузка...</p>}
            {!loading && images.length === 0 && query && <p>Ничего не найдено.</p>}
            <div className="image-list">
                {images.map((image) => (
                    <ImageListItem
                        key={image.id}
                        image={image}
                        onClick={() => handleClick(image)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageList;
