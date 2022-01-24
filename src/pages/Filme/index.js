import React, {useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import '../../styles/filme.css';
import api from '../../services/api';
import {toast} from 'react-toastify';

function Filme(){
    const [filme, setFilme] = useState([]);
    const {id} = useParams();
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        async function loadApi(){
            const response = await api.get('r-api/?api=filmes/'+id);
            
            if(response.data.length === 0){
                navigate('/');
                return;
            }

            setFilme(response.data);
            setLoading(false);
        }

        loadApi();
    }, [id]);

    function salvarFilme(){
        const listaFavoritos = localStorage.getItem('filmes');

        var filmesFavoritos = JSON.parse(listaFavoritos) || [];

        if(filmesFavoritos.some((filmeFavorito) => {return filmeFavorito.id === filme.id})){
           toast.info('Esse filme já foi favoritado!');
        }else{
            filmesFavoritos.push(filme);
            localStorage.setItem('filmes', JSON.stringify(filmesFavoritos));

            toast.success('Filme favoritado!');
        }
    }

    if(loading === false){
        return(
            <section className="detalhes-filme">
                <article className="filme-detalhes">
                    <h1 className="titulo-filme-detalhe">{filme.nome}</h1>
                    <div className="container-capa-detalhe">
                        <img src={filme.foto} alt="Título" className="capa-filme-detalhe"/>
                    </div>
                    <h2 className="titulo-sinopse">Sinopse</h2>
                    <p className="txt-sinopse">{filme.sinopse}</p>
                    <div classsName="container-btn">
                        <a id="btn-salvar" className="btn btn-cinza" onClick={salvarFilme}>Salvar</a>
                        <a target="blank" href={`https://www.youtube.com/results?search_query=Trailer ${filme.nome}`} id="btn-trailer" className="btn btn-vermelho">Trailer</a>
                    </div>
                </article>
            </section>
        );
    }else{
        return(
            <div className="txt-loading">
                <h1>Carregando...</h1>
            </div>
        );
    }
}

export default Filme;