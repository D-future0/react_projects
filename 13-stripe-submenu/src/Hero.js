import React from 'react'
import phoneImg from './images/phone.svg';

const Hero = () => {
  return (
    <section className='hero'>
        <div className='hero-center'>
            <article  className='hero-info'>
                <h1>I just told you! You've killed me! Fry!</h1>
                <p>I just told you! You've killed me! Fry! Quit doing the right thing, you jerk! Michelle, I don't regret this, but I both rue and lament it. Morbo can't understand his teleprompter because he forgot how you say that letter that's shaped like a man wearing a hat.</p>
                <button className='btn'> start now</button>
            </article>
            <article className='hero-images'>
                <img src={phoneImg} className='phone-img' alt='phone'></img>
            </article>
        </div>
    </section>
  )
}

export default Hero