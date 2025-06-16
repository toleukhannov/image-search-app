import {type FC, type FormEvent, useEffect, useState} from "react";
import Search from "../Search";
import ImageList from "../ImageList";
import type {UnsplashImage} from "../../shared/types/types.ts";
import unsplash from "../../api/api.ts";

const HomePage: FC = () => {
    const [query, setQuery] = useState("");
    const [images, setImages] = useState<UnsplashImage[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchRandomImages = async () => {
            setLoading(true);
            try {
                const res = await unsplash.get("/photos/random", {
                    params: { count: 9 },
                });
                setImages(res.data);
            } catch (err) {
                console.error("Ошибка загрузки случайных фото:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchRandomImages();
    }, []);

    const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!query.trim()) return;

        setLoading(true);
        try {
            const res = await unsplash.get("/search/photos", {
                params: {
                    query,
                    per_page: 9,
                },
            });
            setImages(res.data.results);
        } catch (err) {
            console.error("Ошибка поиска:", err);
        } finally {
            setLoading(false);
        }
    };
    return (
        <>
            <Search
                query={query}
                setQuery={setQuery}
                onSearch={handleSearch}
            />
            <ImageList
                images={images}
                loading={loading}
                query={query}
            />
        </>
    );
};

export default HomePage;