import type {FC} from "react";
import type { UnsplashImage } from "../../../shared/types/types.ts";
import {useNavigate} from "react-router-dom";

interface ImageListProps {
    image: UnsplashImage;
    onClick?: () => void;
}

const ImageListItem: FC<ImageListProps> = (props) => {
    const { image } = props;

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/photo/${image.id}`, { state: image });
    };
    return (
        <div className="image-list-item" onClick={handleClick}>
            <img src={image.urls.small} alt={image.alt_description || "photo"} className="image"/>
        </div>
    );
};

export default ImageListItem;