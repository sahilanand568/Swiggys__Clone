import './Footer.css'
import { cityListCol1, cityListCol2, cityListCol3, cityListCol4 } from "../Assets/cityData";
import Button from './Button';
import { PiCopyrightLight } from 'react-icons/pi';
import { FaLinkedin } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import { SiSwiggy } from 'react-icons/si'
import { Link } from 'react-router-dom';

function Footer() {

    return (
        <footer>
            <div className="foot-container1">
                <ul className='list'>
                    <li>Company
                        <ul className='company-header'>
                            <li>About Us</li>
                            <li>Team</li>
                            <li>Careers</li>
                            <li>Swiggy Blog</li>
                            <li>Bug Bounty</li>
                            <li>Swiggy One</li>
                            <li>Swiggy Corporate</li>
                            <li>Swiggy Instamart</li>
                            <li>Swiggy Genie</li>
                        </ul></li>
                    <li >Contact
                        <ul className='contact-header'>
                            <li>Help & Support</li>
                            <li>Partner with us</li>
                            <li>Ride with us</li>
                        </ul></li>
                    <li >Legal
                        <ul className='legal-header'>
                            <li>Terms & Conditions</li>
                            <li>Refund & Cancellation</li>
                            <li>Privacy Policy</li>
                            <li>Cookie Policy</li>
                            <li>Offer Terms</li>
                            <li>Phishing & Fraud</li>
                            <li>Corporate-Swiggy Money Codes Terms and Conditions</li>
                            <li>Corporate-Swiggy Discount Voucher Terms and Conditions</li>
                        </ul></li>
                </ul>
                <div className="play-store-box">
                    <Button val="Apple-playstore" />
                    <Button val="G-playstore" />
                </div>
            </div>

            <div className="divide__line"></div>

            <div className="foot-container2">
                <h3>We Deliver to</h3>
                <ul className="deliver-area">
                    <li className="col">
                        {cityListCol1.map((val) => {
                            return (<li>{val}</li>)
                        })}
                    </li>
                    <li className="col">
                        {cityListCol2.map((val) => {
                            return (<li>{val}</li>)
                        })}
                    </li>
                    <li className="col">
                        {cityListCol3.map((val) => {
                            return (<li>{val}</li>)
                        })}
                    </li>
                    <li className="col">
                        {cityListCol4.map((val) => {
                            return (<li>{val}</li>)
                        })}
                    </li>
                </ul>
            </div>
            <div className="divide__line"></div>

            <div className="foot-container3">
                <div className="logo" onClick={() => {
                    window.scrollTo({
                        top: 0,
                        behavior: 'instant'
                    })
                }}>
                    <Link to="/"><SiSwiggy className="footer__SwiggySymbol" />
                        <h3 >SWIGGY</h3></Link>
                </div>
                <div className="copyright"><PiCopyrightLight className='copyright_Symbol' />2023 Swiggy by Sahil Anand</div>
                <div className="social-media">
                    <Link to="https://www.facebook.com/swiggy.in" target="_blank"><img  alt="Facebook" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-facebook_tfqsuc" /></Link>
                    <Link to="https://www.linkedin.com/in/sahil-anand-a912b527a/" target="_blank"><FaLinkedin className="linkedIn__Logo" style={{ color: "white"}}  /></Link>
                    <Link to="https://github.com/sahilanand568" target="_blank"><AiFillGithub className="gitHub__Logo" style={{ color: "white"}} /></Link>
                    <Link to="https://twitter.com/swiggy" target="_blank"><img  alt="Twitter" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-twitter_gtq8dv" /></Link>
                </div>
            </div>

        </footer>
    )
}

export default Footer;