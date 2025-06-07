import React from 'react';
import '../Styles/index.css'

const Hero = () => {
    return (
        <div className='hero-section'>
            <div className="hero">
                <div className="left-side">
                        <h1>
                            Hi, my name is

                            Alex Rahman  
                            I build modern, scalable web applications.
                        </h1>

                        <p>
                            I'm a passionate Full-Stack Web Developer with 3+ years of experience. I love creating intuitive UI, powerful backend systems, and solving real-world problems with code.

                            Let's build something great together.
                        </p>

                        <div className="buttos">
                            <button>View My Work</button>
                            <button>Contact Me</button>
                        </div>
                </div>
                <div className="right-side">
                    <div className="image-div">
                        <div className="img">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;