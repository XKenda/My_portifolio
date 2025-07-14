import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {

    return (
        <div className="Footer-con">
            <div className="email-input-con">
                <h3 className="footer-email-title">See My Projects At Once & leave Here Your E-mail Address</h3>
                <input placeholder="Email Adress" type="email" id="footer-email-input" />
                <button className="footer-input-submit">Submit</button>
            </div>
            <div className="footer-nav-con">
                <h3 onClick={() => {
                    document.querySelector("#home").scrollIntoView({
                        behavior: "smooth"
                    })
                }
                } className="footer-nav-title">Portifolio</h3>
                <nav>
                    <ul className="footer-ul">
                        <li><a href="https://www.linkedin.com/in/mahmoud-ibrahim-ab4b76290/"><FaLinkedinIn /></a></li>
                        <li><a href="https://www.facebook.com/share/1WEbEv49rx/?mibextid=qi2Omg"><FaFacebookF /></a></li>
                        <li><a href="#"><FaInstagram /></a></li>
                        <li><a href="https://github.com/XKenda"><FaGithub /></a></li>
                    </ul>
                </nav>
            </div>
            <p className="footer-copywrite-text">--&copy; Copyright 2025-- All Rights Reserved Here By Mahmoud Ibrahim Shaaban</p>
        </div>
    )
}

export default Footer;