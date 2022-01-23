import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import '../../styles/filme.css';

function Filme(){
    const [filme, setFilme] = useState([]);

    useEffect(() => {
        function loadApi(){
            let url = 'https://sujeitoprogramador.com/r-api/?api=filmes';

            fetch(url).then((r) => r.json()).then((json) => {
                setFilme(json);
            })
        }

        loadApi();
    }, []);
    
    const {id} = useParams();
    var filmeSelecionado = 0;

    console.log(id);
    console.log(filme[0]);
    
    /*filme.map((item, i) => {
        if(parseInt(item.id) == parseInt(id))
            filmeSelecionado = i;
    });*/

    console.log(filmeSelecionado);

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
                    <a id="btn-salvar" className="btn btn-cinza">Salvar</a>
                    <a id="btn-trailer" className="btn btn-vermelho">Trailer</a>
                </div>
            </article>
        </section>
    );
}

export default Filme;