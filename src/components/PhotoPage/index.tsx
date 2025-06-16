// libraries
import type { FC } from "react";
import { useLocation } from "react-router-dom";
// types
import type { UnsplashImage } from "../../shared/types/types";
// utils
import { saveToFavourites } from "../../shared/utils/localStorage";
// static
import FavouritesIcon from "../../assets/icons/favourites.svg";
import DownloadIcon from "../../assets/icons/download-icon.svg";

const PhotoPage: FC = () => {
    const location = useLocation();
    const image = location.state as UnsplashImage;

    if (!image) {
        return <div className="container">Фотография не найдена.</div>;
    }

    const handleAddToFavourites = () => {
        saveToFavourites(image);
    };

    return (
        <div className="photo-page-wrapper" style={{
            height: '60vh',
            background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${image.urls.regular})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }}>
            <div className="container photo-page-wrapper" >
                <div className="photo-header" >
                    <div className="user-info">
                        <img
                            alt={image.user.name}
                            className="user-avatar"
                            src={image.user.profile_image.medium}
                        />
                        <div className="user-text">
                            <p className="user-fullname">{image.user.name}</p>
                            <p className="user-nickname">@{image.user.username}</p>
                        </div>
                    </div>

                    <div className="photo-actions">
                        <button className="favourites-button" onClick={handleAddToFavourites}>
                            <img alt="Иконка избранного" src={FavouritesIcon} className="favourites-icon"/>
                        </button>
                        <a
                            className="download-button"
                            href={`${image.links.download}?force=true`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={DownloadIcon} alt="Скачать" />
                            Download
                        </a>
                    </div>
                </div>

                <img
                    alt={image.alt_description || "Фото"}
                    src={image.urls.regular}
                    className="photo-img"
                />
            </div>
        </div>
    );
};

export default PhotoPage;
