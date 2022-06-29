import React from "react";
import "./Style/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebook,
	faGooglePlus,
	faLinkedin,
	faTelegram,
} from "@fortawesome/free-brands-svg-icons";

function footer() {
	return (
		<div className="footer">
			<h2>Contact me</h2>
			<p>Email: Chaknithg@gmail.com</p>
			<br></br>
			<p className="social-container">
				<a
					href="https://www.facebook.com/Chaknith"
					target="_blank"
					rel="noopener noreferrer"
					className="facebook"
				>
					<FontAwesomeIcon className="social" icon={faFacebook} />
				</a>
				<a
					href="https://mail.google.com/mail/u/chaknithg@gmail.com"
					target="_blank"
					rel="noopener noreferrer"
					className="gmail"
				>
					<FontAwesomeIcon className="social" icon={faGooglePlus} />
				</a>

				<a
					href="https://t.me/Chaknith"
					className="telegram"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FontAwesomeIcon className="social" icon={faTelegram} />
				</a>
				<a
					href="https://www.linkedin.com/in/chaknith-bin-3129b6191/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FontAwesomeIcon className="linkedin social" icon={faLinkedin} />
				</a>
			</p>
			<br></br>
			<p className="credit">powered by react & hosted by github</p>
			<br></br>
		</div>
	);
}

export default footer;
