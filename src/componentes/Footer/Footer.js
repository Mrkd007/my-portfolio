import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
	return (
    
    <section className='container career-container' style={{minHeight: '12rem', paddingBottom: '2rem'}}>
		<footer>
			<a href='#home' className='footer__logo'>
				KrishnDevashish
			</a>

			<ul className='permalinks'>
				<li>
					<a href='#home'>Home</a>
				</li>
				<li>
					<a href='#about'>About</a>
				</li>
				<li>
					<a href='#career'>Career</a>
				</li>
				<li>
					<a href='#projects'>Projects</a>
				</li>
				<li>
					<a href='#contact'>Contact</a>
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
