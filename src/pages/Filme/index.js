import React, {useState} from 'react';
import '../../styles/filme.css';
import vingadores from '../../assets/vingadores-ultimato.jpg'

function Filme(){
    return(
        <section className="detalhes-filme">
            <article class="filme-detalhes">
                <h1 className="titulo-filme-detalhe">Vingadores - Ultimato</h1>
                <div className="container-capa-detalhe">
                    <img src={vingadores} alt="Título" className="capa-filme-detalhe"/>
                </div>
                <h2 className="titulo-sinopse">Sinopse</h2>
                <p className="txt-sinopse">Após Thanos eliminar metade das criaturas vivas, os Vingadores têm de lidar com a perda de amigos e entes queridos. Com Tony Stark vagando perdido no espaço sem água e comida, Steve Rogers e Natasha Romanov lideram a resistência contra o titã louco.</p>
                <div classsName="container-btn">
                    <a id="btn-salvar" className="btn btn-cinza">Salvar</a>
                    <a id="btn-trailer" className="btn btn-vermelho">Trailer</a>
                </div>
            </article>
        </section>
    );
}

export default Filme;