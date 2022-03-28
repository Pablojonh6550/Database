import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa';
import styles from './css/Footer.module.css';

function Footer() {
    return (
        <Footer>
            <ul>
                <li>
                    <FaFacebook />
                </li>
                <li>
                    <FaInstagram />
                </li>
                <li>
                    <FaLinkedin />
                </li>
            </ul>
        </Footer>
    );
}

export default Footer;