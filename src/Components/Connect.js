import React from "react";
import illust_img from  "../images/getInTouch.png"

const Connect = () => {


    return (
        <div id="connect-with" className="connect-sec">
            <img className="connect-photo" src={illust_img} alt="connect photo" />
            
            <form action={"#"} className="connect_form">
                <h2 className="connect-form-title">Get In Touch</h2>
                <input type="text" id="f_name" placeholder="First Name" />
                <input type="text" id="l_name" placeholder="Last Name" />
                <input type="email" id="email" name="Email" placeholder="Email Address" />
                <input type="tel" id="phone" name="phone" placeholder="Phone No." />
                <textarea id="text_area" placeholder="Enter Text"></textarea>

                <button id="submit-btn" >Send</button>
            </form>
        </div>
    )
}

export default Connect;