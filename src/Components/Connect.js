import React, { useRef } from "react";
import illust_img from  "../images/getInTouch.png"
import emailjs from '@emailjs/browser';

const Connect = () => {
    const nameRef = useRef(null)
    const titleRef = useRef(null);
    const emialRef = useRef(null)
    const phoneRef = useRef(null)
    const textRef = useRef(null)



    const sendEmail = (e) => {
        e.preventDefault();

        const name = nameRef.current.value
        const title = titleRef.current.value
        const email = emialRef.current.value
        const phone = phoneRef.current.value;
        const text = textRef.current.value;
        const time = new Date().toISOString().split('T').join(' ')


        alert("message Are being sent")
        emailjs.send(
        "service_e0rkudc",
        "template_073jtkg",
        {title, name, email, phone, message: text, time},
        "Z5rdwFlTHAK2oZNQm"
        )
        .then((result) => {
            console.log(result.text);
            alert("Message sent!");
        }, (error) => {
            console.log(error);
            alert("Error sending message");
        });
  };


    return (
        <div onSubmit={sendEmail} id="connect-with" className="connect-sec">
            <img className="connect-photo" src={illust_img} alt="connect photo" />
            
            <form action={"#"} className="connect_form">
                <h2 className="connect-form-title">Get In Touch</h2>
                <input ref={nameRef} required type="text" id="f_name" placeholder="Your Name" />
                <input ref={titleRef} required type="text" id="l_name" placeholder="title" />
                <input ref={emialRef} required type="email" id="email" name="Email" placeholder="Your Email Address" />
                <input ref={phoneRef} required type="tel" id="phone" name="phone" placeholder="Your Phone No." />
                <textarea ref={textRef} required id="text_area" placeholder="Enter Text"></textarea>

                <button id="submit-btn" type="submit" >Send</button>
            </form>
        </div>
    )
}

export default Connect;