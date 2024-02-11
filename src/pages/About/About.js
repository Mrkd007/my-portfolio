import Image from "../../utils/images";
import {
	FaDownload,
	FaFacebookSquare,
	FaGithub,
	FaInstagramSquare,
	FaLinkedin,
	FaStackOverflow,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import CV from "../../assets/Krishna_devashish_resume.pdf";

const About = () => {
	return (
		<section className='container about-container'>
			<div className='container__header'>About Me</div>
			<div className='about-container__details'>
				<div className='about-container__profile'>
					<img src={Image.ProfileFilledPic} alt='Krishn' />
				</div>
				<h1 className='about-container__details-name'>Krishn Devashish</h1>
				<div className='about-container__details-social'>
					<FaFacebookSquare />
					<FaInstagramSquare />
					<FaGithub />
					<FaStackOverflow />
					<FaXTwitter />
					<FaLinkedin />
				</div>
				<p className='about-container__details-basic'>
					Experienced and motivated Software Engineer with a passion for
					front-end development, user experience, and problem-solving. I thrive
					in dynamic environments, leveraging my skills and expertise to create
					innovative solutions that enhance user engagement and drive business
					growth. With a solid foundation in Computer Science and extensive
					hands-on experience, I have honed my abilities to deliver high-quality
					code, collaborate effectively in cross-functional teams, and meet
					project objectives within demanding deadlines.
				</p>
				<a
					download='Krishn_Devashish_Resume.pdf'
					className='about-container__download-btn'
					target='_blank'
					rel='noreferrer'
					href={CV}
				>
					<FaDownload />
					Download resume
				</a>
			</div>
		</section>
	);
};

export default About;
