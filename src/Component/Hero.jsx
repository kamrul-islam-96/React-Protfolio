import React from 'react';
import '../Styles/index.css'

const Hero = () => {
    return (
        <div className='hero-section'>
            <div className="hero">
                <div className="left-side">
                        <h1>
                            Hi, My name is
                            <br />
                            <span>Alex Rahman</span>  
                            <br />
                            I build modern, scalable web applications.
                        </h1>

                        <p>
                            I'm a passionate Full-Stack Web Developer with 3+ years of experience.
                            <br />
                            I love creating intuitive UI, powerful backend systems, and solving real-world problems with code.
                            <br />
                            Let's build something great together.
                        </p>

                        <div className="buttos">
                            <button>View My Work</button>
                            <button>Contact Me</button>
                        </div>
                </div>
                <div className="right-side">
                    <div className="image-div">
                        <img src="/images/dp.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;