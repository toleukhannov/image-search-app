import type { FC, FormEvent } from "react";
import searchIcon from '../../assets/icons/search.svg'

interface Props {
    query: string;
    setQuery: (value: string) => void;
    onSearch: (e: FormEvent<HTMLFormElement>) => void;
}

const Search: FC<Props> = ({ query, setQuery, onSearch }) => {
    return (
        <div className="searching">
            <div className="container searching-wrapper">
                <form onSubmit={onSearch} className="search-form">
                    <div className="search-input-wrapper">
                        <input
                            type="search"
                            placeholder="Поиск"
                            className="search-input"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <img
                            src={searchIcon}
                            alt="Поиск"
                            className="search-input-icon"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Search;
