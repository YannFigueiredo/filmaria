import {Link} from 'react-router-dom';

function Header(){
    return(
        <header className="header-principal container">
            <Link className="titulo-site" to='/'>Filmaria</Link>
            <Link to="/favoritos" className="btn-favoritos">Favoritos</Link>
        </header>
    );
}

export default Header;