import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons" ;

export default function Footer() {
    return (
        <footer>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=demimanipolo222@gmail.com" target="_blank"><button className="email"><FontAwesomeIcon icon={faEnvelope} /></button></a>
            <a href="https://www.linkedin.com/in/demi-mae-manipolo/" target="_blank"><button className="linked-in"><FontAwesomeIcon icon={faLinkedin} /></button></a>
        </footer>
          
    );
  }
  