import React from 'react'
import './styles.css'
import logo from '../../assets/methodist.png'
import mocker from '../../assets/3Dmocker.jpeg'

const LandingHero = () => {

    const handleScroll = (e) => {
        const element = document.getElementById('scroll');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }

    }
    return (
        <div className='landing-hero'>
            <div className='upper-layer'>
                <img src={logo} alt="" style={{ width: 80 }} />
                <div>
                    <h1 className='landing-title-text'>THE METHODIST CHURCH GHANA</h1>
                    <h1 className='landing-directions-text'>CONNEXIONAL METHOFEST 2023</h1>
                    <h1 className='landing-footer-text'>DIRECTIONS TO AYEM ODA</h1>
                </div>
            </div>
            <div className='lower-layer'>
                <div className="overlay">
                    <div className='overlay-image'>
                        <img src={mocker} alt="" />
                    </div>
                    <div className='overlay-footer'>
                        <p>A Digital Directional Road Guide to Akyem Oda Methodist Cathedral</p>
                        <button onClick={handleScroll}>View Dioceses</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingHero
