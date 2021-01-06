import './styles.css';
import { ReactComponent as YouTubeIcon } from './youtube.svg';
import { ReactComponent as Linkedin } from './linkedin.svg';
import { ReactComponent as Instagram } from './instagram.svg';

function Footer(){

    return(
        <footer className="main-footer">
            App desenvolvido durante a 2º ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://youtube.com/c/DevSuperior" target="_new">
                    <YouTubeIcon />
                </a>
                <a href="https://linkedin.com/school/devsuperior" target="_new">
                    <Linkedin />
                </a>
                <a href="https://instagram.com/devsuperior.ig" target="_new">
                    <Instagram />
                </a>
            </div>
        </footer>
    )

}

export default Footer;