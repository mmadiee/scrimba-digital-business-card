import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons" ;

export default function Main() {
  return (
    <>
      <div className="button-links">
        <a href="https://github.com/mmadiee" target="_blank"><button className="gitHub"><FontAwesomeIcon icon={faGithub} /></button></a>
        <a href="https://mmadiee.github.io/odin-landing-page/" target="_blank"><button className="website"><FontAwesomeIcon icon={faGlobe} /></button></a>
      </div>
      <div className="about">
        <h4>About me</h4>
        <p>Hi! I&apos;m a web developer based in Manila, Philippines with a strong background
            in full-stack web development and a passion for 
            creating efficient, user-friendly web systems. </p>
        <p><strong>Let&apos;s connect!</strong></p>
      </div>
    </>
  );
}
