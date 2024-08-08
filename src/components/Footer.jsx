import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons" ;

export default function Footer() {
    return (
        <footer>
            <button className="email"><FontAwesomeIcon icon={faEnvelope} /></button>
            <button className="linked-in"><FontAwesomeIcon icon={faLinkedin} /></button>
        </footer>
          
    );
  }
  