import React, {useState, useEffect} from 'react';
import vingadores from '../../assets/vingadores-ultimato.jpg';
import '../../styles/home.css';

function Home(){
    const [filme, setFilme] = useState([
        {titulo: 'Vingadores - Ultimato', capa: '../../assets/vingadores-ultimato.jpg', detalhes:'#'},
        {titulo: 'Shrek', capa: './assets/shrek.jpg', detalhes: '#'},
        {titulo: 'As Branquelas', capa: './assets/as-branquelas.jpg', detalhes: '#'}
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
                    <article class="card-filme">
                        <h1 className="titulo-filme">{filme.titulo}</h1>
                        <div className="container-capa">
                            <img className="capa-filme" src={vingadores} alt={filme.titulo}/>
                        </div>
                        <a className="btn">Acessar</a>
                    </article>
                ))
            }
        </section>
    );
}

export default Home;