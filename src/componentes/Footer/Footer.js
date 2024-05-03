import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const Footer = ({ currentNav, setCurrentNav }) => {
	return (
		<section
			id='footerSection'
			className='container career-container'
			style={{ minHeight: "12rem", paddingBottom: "2rem" }}
		>
			<footer>
				<span
					className='footer__logo'
					onClick={() => {
						setCurrentNav("about");
						document.getElementById("aboutSection").scrollIntoView({
							behavior: "smooth",
							block: "start",
							inline: "nearest",
						});
					}}
				>
					KrishnDevashish
				</span>

				<ul className='permalinks'>
					<li>
						<span
							onClick={() => {
								setCurrentNav("home");
								document.getElementById("homeSection").scrollIntoView({
									behavior: "smooth",
									block: "start",
									inline: "nearest",
								});
							}}
						>
							Home
						</span>
					</li>
					<li>
						<span
							onClick={() => {
								setCurrentNav("about");
								document.getElementById("aboutSection").scrollIntoView({
									behavior: "smooth",
									block: "start",
									inline: "nearest",
								});
							}}
						>
							About
						</span>
					</li>
					<li>
						<span
							onClick={() => {
								setCurrentNav("career");
								document.getElementById("careerSection").scrollIntoView({
									behavior: "smooth",
									block: "start",
									inline: "nearest",
								});
							}}
						>
							Career
						</span>
					</li>
					<li>
						<span
							onClick={() => {
								setCurrentNav("project");
								document.getElementById("projectSection").scrollIntoView({
									behavior: "smooth",
									block: "start",
									inline: "nearest",
								});
							}}
						>
							Projects
						</span>
					</li>
					<li>
						<span
							onClick={() => {
								setCurrentNav("contact");
								document.getElementById("contactSection").scrollIntoView({
									behavior: "smooth",
									block: "start",
									inline: "nearest",
								});
							}}
						>
							Contact
						</span>
					</li>
				</ul>

				<div className='footer__socials'>
					<a href='https://facebook.com'>
						<FaFacebookF />
					</a>
					<a href='https://instagram.com'>
						<FiInstagram />
					</a>
					<a href='https://twitter.com'>
						<IoLogoTwitter />
					</a>
				</div>

				<div className='footer__copyright'>
					<small>&copy; itskd.io. All rights reserved</small>
				</div>
			</footer>
		</section>
	);
};

export default Footer;
