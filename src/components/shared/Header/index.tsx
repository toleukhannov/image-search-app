// libraries
import type { FC } from "react";
import { Link } from "react-router-dom";
// static
import logoImg from '../../../assets/images/OBJECTS.png';
import favIcon from '../../../assets/icons/Group.png';

const Header: FC = () => {
    return (
        <>
            <header className="header">
                <div className="container header-wrapper">
                    <Link to="/">
                        <img alt="Логотип" className="logo-img" src={logoImg} />
                    </Link>
                    <Link className="favourites-link" to={'/favourites'}>
                        <img alt="Избранное" className="favourites-link-img" src={favIcon}/>
                        Избранное
                    </Link>
                </div>
            </header>
        </>
    );
};

export default Header;