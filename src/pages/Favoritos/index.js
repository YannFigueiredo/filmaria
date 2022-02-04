import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import '../../styles/favorito.css';
import {toast} from 'react-toastify';

export default function Favoritos(){
    const [favoritos, setFavoritos] = useState([]);

    useEffect(() => {
        const listaFavoritos = localStorage.getItem('filmes');

        setFavoritos(JSON.parse(listaFavoritos) || []);
    }, []);

    function excluirFavorito(id){
        if(window.confirm("Deseja realmente excluir este filme?")){
            const filtroFavoritos = favoritos.filter((item) => {
                return(item.id != id);
            });
    
            setFavoritos(filtroFavoritos);
            localStorage.setItem('filmes', JSON.stringify(filtroFavoritos));
    
            toast.success("Filme removido!");
        }
    }
    
    return(    
        <section className="container">
            <h1 className="titulo-pagina">Meus Filmes</h1>
            {favoritos.length === 0 && <p className="msg-semfilmes">Você não possui filmes salvos.</p>}
            {
            favoritos.map(favorito => (
                <div key={favorito.id} className="favorito">
                    <div>
                        <h3>{favorito.nome}</h3>
                    </div>
                    <div>
                        <Link to={`/filme/${favorito.id}`} className="btn btn-cinza btn-detalhes">Detalhes</Link>
                        <a className="btn btn-vermelho btn-excluir" onClick={() => {excluirFavorito(favorito.id)}}>Excluir</a>
                    </div>
                </div>
            ))
            }
        </section>   
    );
}