import React from 'react'
import './Buttons.css'


const ButtonsProfile = () => {

  const phoneNumberUnimed = '2433366000';
  const phoneNumberStCasa = '2433258300';
  const phoneNumberOncobarra = '2433257777';
  const phoneNumberCentroOrto = '2433239567';

  return (
    <div className='ButtonsProfile-div d-flex flex-column align-items-center'>
      <p className='fw-semibold'>Acompanhe-me nas redes:</p>
      <a className="nav-link" aria-current="page" target='_blank' href="https://www.youtube.com/watch?v=EHYyfNOhers"><button className='btn btn-template'>Quando Ninguém Mais Me Vê</button></a>
      <a className="nav-link" aria-current="page" target='_blank' href="https://m.youtube.com/@OficialPriscilaCruz/featured"><button className='btn btn-template'>Youtube</button></a>   
      <a className="nav-link" aria-current="page" target='_blank' href="https://www.instagram.com/priscilacruz_/"><button className='btn btn-template'>Instagram</button></a> 
      <a className="nav-link" aria-current="page" target='_blank' href="https://m.facebook.com/100045620257794/"><button className='btn btn-template'>Facebook</button></a> 
      <a className="nav-link" aria-current="page" target='_blank' href="https://open.spotify.com/artist/4yUtuKurjPDoWupy1t3pys"><button className='btn btn-template'>Spotify</button></a> 
      <a className="nav-link" aria-current="page" target='_blank' href="https://www.deezer.com/br/artist/5619940?deferredFl=1&utm_campaign=artist&utm_source=google&utm_medium=organic"><button className='btn btn-template'>Deezer</button></a> 

    </div>
  )
}

export default ButtonsProfile