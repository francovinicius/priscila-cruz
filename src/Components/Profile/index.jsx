import React from 'react'
import './Profile.css'
import ButtonsProfile from '../Buttons'
import Footer from '../Rodape'

const Profile = () => {
    return (
        <div className='teste'>
            <div data-aos="fade-right" className='profile-div'>
                <div className='div-presentation d-flex flex-column align-items-center'>
                    <img src="./assets/img/priscila-bg.svg" className='img-profile' alt="Foto Pra Priscila Cruz" />
                </div>

                <div>
                    <ButtonsProfile />
                </div>
            </div>

            <Footer />
        </div>

    )
}

export default Profile