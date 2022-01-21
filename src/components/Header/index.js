import {Link} from 'react-router-dom';

function Header(){
    return(
        <header className="header-principal">
            <Link className="titulo-site" to='/'>Filmaria</Link>
            <a className="btn-favoritos">Favoritos</a>
        </header>
    );
}

export default Header;