import React from 'react';
import '../Styles/index.css'

const Contact = () => {
    return (
        <div className='contact-section'>
            <div className="contact-form">
                <div className="form-left">
                    <h1>Contact</h1>
                    <p>
                        I would love to hear about your project and how I
                        could help. Please fill in the form, and I'll get back
                        to you as soon as possible.
                    </p>
                </div>
                <form action="#">
                    <input className='input-box' type="text" placeholder='Enter Your First Name' /> <br />
                    <input className='input-box' type="text" placeholder='Enter Your Second Name' /> <br />
                    <input className='input-box' type="email" placeholder='Enter Your Email' /> <br />
                    <textarea className='text-area' name="message" placeholder="Your Message" rows="5" required></textarea>
                    <button className='submit'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;