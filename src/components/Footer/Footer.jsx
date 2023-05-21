import logo from "../../assets/logo.png"
import { FaMailBulk, FaPhone, FaHome, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <div>
                    <img className='w-36' src={logo} alt="" />
                    <p>The best chooice for you!<br /><p>Alreserved© by baby toy shop</p></p>
                    <div className="text-2xl flex gap-5">
                        <a href="https://www.facebook.com/codersrabbi">
                            <FaFacebook />
                        </a>
                        <a href="https://www.linkedin.com/in/coders-rabbi/">
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com/coders-rabbi">
                            <FaGithub />
                        </a>
                    </div>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Address</span>
                    <a className="link link-hover flex items-center gap-3 text-xl"><FaHome /> Mirpur-14, Dhaka</a>
                    <a className="link link-hover flex items-center gap-3 text-xl"><FaPhone /> 01303320413</a>
                    <a className="link link-hover flex items-center gap-3 text-xl"><FaMailBulk /> codersrabbi@gmail.com</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;