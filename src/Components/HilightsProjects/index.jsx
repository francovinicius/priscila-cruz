import React from 'react'
import './Highlights.css'
import destaquesData from './Highlights.json';

function DestaqueCard({ projeto }) {
    return (

        <div>
            <div className='highlight-div card'>
                <div className='highlight-img'>
                    <img src={projeto.img} alt={projeto.alt} />
                </div>

                <div className='highlight-text'>
                    <h3>{projeto.title}</h3>
                    <p>{projeto.text}</p>
                    <a className='link' href={projeto.link} target='blank'><button className='btn btn-sm btn-highlight'>Saiba Mais</button></a>
                </div>
            </div>


        </div>




    );

}

const HighlightsProjects = () => {
    return (
        <div className='highlight-div-principal'>


            <h2>Projetos em Destaque</h2>

            <div className="highlight-div-projects">
                {destaquesData.map((projeto, index) => (
                    <DestaqueCard key={index} projeto={projeto} />
                ))}
            </div>

        </div>
    )
}

export default HighlightsProjects