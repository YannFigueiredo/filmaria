import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import api from '../../services/api';
import '../../styles/home.css';

function Home(){
    const [filme, setFilme] = useState([
        
    ]);

    useEffect(() => {
        async function loadApi(){
            const response = await api.get('r-api/?api=filmes');
            
            setFilme(response.data);
        }

        loadApi();
    }, []);
    
    return(
        <section className="cards-filmes">
            {
                filme.map(filme => (
                    <article key={filme.id} className="card-filme">
                        <h1 className="titulo-filme">{filme.nome}</h1>
                        <div className="container-capa">
                            <img className="capa-filme" src={filme.foto} alt={filme.nome}/>
                        </div>
                        <Link to={`/filme/${filme.id}`} className="btn btn-vermelho">Acessar</Link>
                    </article>
                ))
            }
        </section>
    );
}

export default Home;