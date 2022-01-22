import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import vingadores from '../../assets/vingadores-ultimato.jpg';
import '../../styles/home.css';

function Home(){
    const [filme, setFilme] = useState([
        {id: 1, titulo: 'Vingadores - Ultimato', capa: '../../assets/vingadores-ultimato.jpg', detalhes:'#'},
        {id: 2, titulo: 'Shrek', capa: './assets/shrek.jpg', detalhes: '#'},
        {id: 3, titulo: 'As Branquelas', capa: './assets/as-branquelas.jpg', detalhes: '#'}
    ]);

    /*useEffect(() => {
        function loadApi(){
            let url = '/filmaria/src/filmes.json';

            fetch(url).then((r) => r.json()).then((json) => {
                setFilme(json);
            })
        }

        loadApi();
    }, []);*/
    
    return(
        <section className="cards-filmes">
            {
                filme.map(filme => (
                    <article key={filme.id} class="card-filme">
                        <h1 className="titulo-filme">{filme.titulo}</h1>
                        <div className="container-capa">
                            <img className="capa-filme" src={vingadores} alt={filme.titulo}/>
                        </div>
                        <Link to="/filme" className="btn btn-vermelho">Acessar</Link>
                    </article>
                ))
            }
        </section>
    );
}

export default Home;