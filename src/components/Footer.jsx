import { HugeiconsIcon } from '@hugeicons/react';
import { InstagramIcon, Linkedin01Icon, NewTwitterIcon, Mail01Icon } from '@hugeicons/core-free-icons';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-brand">
                    <h2>
                        <img 
                            src="https://tseccodetantra.com/static/smol.png" 
                            alt="CodeTantra Logo" 
                            height="30" 
                            width="30" 
                        />
                        CodeTantra
                    </h2>
                    <p>
                        Empowering developers with the best tools and resources. Join our community and start building the future today.
                    </p>
                </div>

                <div>
                    <h3 className="footer-heading">Quick Links</h3>
                    <ul className="footer-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#blog">Blog</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="footer-heading">Legal</h3>
                    <ul className="footer-links">
                        <li><a href="#privacy">Privacy Policy</a></li>
                        <li><a href="#terms">Terms of Service</a></li>
                        <li><a href="#cookie">Cookie Policy</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="footer-heading">Connect</h3>
                    <div className="footer-social">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon-link">
                            <HugeiconsIcon icon={InstagramIcon} size={20} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon-link">
                            <HugeiconsIcon icon={Linkedin01Icon} size={20} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="social-icon-link">
                            <HugeiconsIcon icon={NewTwitterIcon} size={20} />
                        </a>
                        <a href="mailto:contact@codetantra.com" aria-label="Email" className="social-icon-link">
                            <HugeiconsIcon icon={Mail01Icon} size={20} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} CodeTantra. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;