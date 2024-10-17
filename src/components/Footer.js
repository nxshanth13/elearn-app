import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faFacebookF, faXTwitter } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
  return (
    <footer>
        <div class="footer-container">
            <div class="footer-section product">
                <h4>Product</h4>
                <ul>
                    <li><a href="#">Employee database</a></li>
                    <li><a href="#">Payroll</a></li>
                    <li><a href="#">Absences</a></li>
                    <li><a href="#">Time tracking</a></li>
                    <li><a href="#">Shift planner</a></li>
                    <li><a href="#">Recruiting</a></li>
                </ul>
            </div>

            <div class="footer-section information">
                <h4>Information</h4>
                <ul>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Support</a></li>
                </ul>
            </div>

            <div class="footer-section company">
                <h4>Company</h4>
                <ul>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Contact us</a></li>
                    <li><a href="#">Learny</a></li>
                </ul>
            </div>

            <div class="footer-section subscribe">
                <h4>Subscribe</h4>
                <div class="subscribe-form">
                    <input type="email" placeholder="Email address" />
                    <button><FontAwesomeIcon icon={faPaperPlane} /></button>
                </div>
                <p>Hello, we are <strong>Fluent Path</strong>. Our goal is to translate the positive effects from revolutionizing how companies engage with their clients & their team members.</p>
            </div>
        </div>

        <div class="footer-bottom">
            <div class="main-logo">
                <h2>Fluent Path</h2>
            </div>
            <ul class="legal">
                <li><a href="#">Terms</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Cookies</a></li>
            </ul>
            <div class="social-icons">
                <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                <a href="#"><FontAwesomeIcon icon={faXTwitter} /></a>
            </div>
        </div>
    </footer>
  )
}

export default Footer