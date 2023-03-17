import React, { useState } from "react";
import { BsInstagram,BsGithub,BsDribbble,BsLinkedin } from "react-icons/bs";

const ContactUs = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [error , setError] = useState(false);
    const [errorEmail , setErrorEmail] = useState(false)
    const [errorText , setErrorText] = useState(false);
    
        const handleSubmit = (event) => {
            event.preventDefault();
            if (name.trim().length === 0 ) {
                setError(true)
                return
              }
              if (email.trim().length === 0 ) {
                setErrorEmail(true)
                return
              }
              if (message.trim().length === 0 ) {
                setErrorText(true)
                return
              }
            alert(`thank you, for your message ${name}`);
            setEmail("")
            setMessage("")
            setName("")
            setSubject("")
            
          
          }
      
    return (
        <div className="contact-cont">
            <h3>Get in touch with us!</h3>
            <div className="contact-cont-header">
                <div className="contact-cont-header-elements">
                    <icon />
                    <h5>Phone</h5>
                    <p>+250 7800000000</p>
                    <p>+250 7800000000</p>
                </div>
                <div className="contact-cont-header-elements">
                    <icon />
                    <h5>Address</h5>
                    <p>Rwanda, Kigali</p>
                    <p>KG 131st</p>
                </div>
                <div className="contact-cont-header-elements">
                    <icon />
                    <h5>Email</h5>
                    <p>maxmizlg512@gmail.com</p>
                    <p>maxmiz512@gmail.com</p>
                </div>
            </div>
            <div className="contact-cont-body">
                <div className="contact-cont-body-title">
                    <p>If you got any questions <br /> Please do not hesitate to send us a message.</p>
                </div>
                <div className="contact-cont-body-form">
                    <form onSubmit={handleSubmit} className ="contact-cont-body-form-self">
                        <label>Name</label>
                        <input
                            type="text"
                            value={name}
                            placeholder="Your Name"
                            onFocus={()=>setError(false)}
                            onChange={(e) => setName(e.target.value)}
                            id={error ? "error-input" : null}
                        />
                        <label>Email</label>
                        <input
                            type="text"
                            value={email}
                            placeholder="Your Email"
                            onFocus={()=>setErrorEmail(false)}
                            id={errorEmail ? "error-input" : null}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label>Subject</label>
                        <input
                            type="text"
                            value={subject}
                            placeholder="Subject"
                            onChange={(e) => setSubject(e.target.value)}
                        />
                        <label>Message</label>
                        <textarea value={message} 
                         id={errorText ? "error-input" : null}
                          onFocus={()=>setErrorText(false)}
                           placeholder=" Your message"
                            onChange={(e) => setMessage(e.target.value)}>
        
                        </textarea>

                        {error || errorEmail || errorText ? <p className="error-msg">Please fill the form corectly</p> : null}
                        <button type="submit"> Send message</button>
                    </form>
                </div>
            </div>
            <div className="=">
                <h2>Connect with us!</h2>
                <div className="contact-cont-footer-icons">
                  <a href="https://www.instagram.com/"><BsInstagram/></a>
                  <a href="https://dribbble.com/"><BsDribbble/></a>
                  <a href="https://github.com/"><BsGithub/></a>
                  <a href="https://www.linkedin.com/"><BsLinkedin/></a>
                </div>
            </div>
        </div>
    )
}

export default ContactUs