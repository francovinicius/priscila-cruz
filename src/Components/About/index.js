import styles from './About.css'

export default function About() {
    return (
        <section>

            <div className='d-flex flex-column justify-content-center align-items-center'>
                <h6>Veja o meu mais novo lançamento!</h6>
                <iframe width="350" height="200" src="https://www.youtube.com/embed/EHYyfNOhers" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>

            <div className='d-flex flex-column justify-content-center align-items-center' id='about'>
                <h1>Sobre Mim</h1>
                <p className='p-apresentacao text-centergit '>
                    Priscila é uma cantora, compositora e pastora com mais de 15 anos de experiência em liderança de adoração. Ela tem formação no Seminário Médio Teológico e, junto com seu esposo Franklin Cruz, lidera a Local 7 Church em Volta Redonda - RJ. Além de suas responsabilidades ministeriais, ela também é mãe do Davi e da Mel.
                    <br />
                    Priscila tem uma forte conexão com Deus e seu amor pela Palavra se reflete em suas canções. Ela acredita que sua música é mais do que apenas entretenimento, mas uma forma de compartilhar a mensagem do amor de Deus, a revelação de Jesus e a manifestação do Espírito Santo.
                    <br />
                    Sua liderança espiritual, combinada com sua habilidade musical, permite que ela transmita sua mensagem de uma maneira única e inspiradora. Como mãe, Priscila enfrenta desafios diários, mas sua fé e confiança em Deus a ajudam a equilibrar suas responsabilidades familiares e ministeriais com graça e sabedoria.
                </p>
            </div>
        </section>
    )
}