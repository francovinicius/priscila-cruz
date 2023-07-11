import styles from './Links.css'

export default function Links() {
    return (
        <section className='section-link' id='links'>
            <div className="d-flex flex-column align-items-center justify-content-center">
                <div className='div-link d-flex flex-column align-items-center justify-content-center'>
                    <a className="a-link nav-link" aria-current="page" target='_blank' href="https://www.youtube.com/watch?v=EHYyfNOhers">Quando Ninguém Mais Me Vê</a>
                </div>
                <div className='div-link d-flex flex-column align-items-center justify-content-center'>
                    <a className="a-link nav-link" aria-current="page" target='_blank' href="https://m.youtube.com/@OficialPriscilaCruz/featured">Canal no Youtube</a>
                </div>
                <div className='div-link d-flex flex-column align-items-center justify-content-center'>
                    <a className="a-link nav-link" aria-current="page" target='_blank' href="https://www.instagram.com/priscilacruz_/">Instagram</a>
                </div>
                <div className='div-link d-flex flex-column align-items-center justify-content-center'>
                    <a className="a-link nav-link" aria-current="page" target='_blank' href="https://m.facebook.com/100045620257794/">Facebook</a>
                </div>
                <div className='div-link d-flex flex-column align-items-center justify-content-center'>
                    <a className="a-link nav-link" aria-current="page" target='_blank' href="https://open.spotify.com/artist/4yUtuKurjPDoWupy1t3pys">Spotify</a>
                </div>
                <div className='div-link d-flex flex-column align-items-center justify-content-center'>
                    <a className="a-link nav-link" aria-current="page" target='_blank' href="https://www.deezer.com/br/artist/5619940?deferredFl=1&utm_campaign=artist&utm_source=google&utm_medium=organic">Deezer</a>
                </div>
            </div>
        </section>
    )
}