import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import '../../styles/favorito.css';

export default function Favoritos(){
    const [favoritos, setFavoritos] = useState([]);

    useEffect(() => {
        const listaFavoritos = localStorage.getItem('filmes');

        setFavoritos(JSON.parse(listaFavoritos) || []);
    }, []);
    
    return(    
        <section>
            <h1 className="titulo-pagina">Meus Filmes</h1>
            {
            favoritos.map(favorito => (
                <div key={favorito.id} className="favorito">
                    <div>
                        <h3>{favorito.nome}</h3>
                    </div>
                    <div>
                        <Link to={`/filme/${favorito.id}`} className="btn btn-cinza btn-detalhes">Detalhes</Link>
                        <a className="btn btn-vermelho btn-excluir" onClick={
                            () => {
                                localStorage.removeItem('filmes', favorito);
                            }
                        }>Excluir</a>
                    </div>
                </div>
            ))
            }
        </section>   
    );
}