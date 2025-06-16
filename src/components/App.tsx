
import type { FC } from "react";
import Header from "./shared/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./HomePage";
import Favourites from "./Favourites";
import PhotoPage from "./PhotoPage";

export const App: FC = () => {


    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path={'/'} element={<HomePage/>}/>
                <Route path={'/favourites'} element={<Favourites/>}/>
                <Route path="/photo/:id" element={<PhotoPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
