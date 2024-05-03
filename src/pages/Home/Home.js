import Image from "../../utils/images";

const Home = () => {
	return (
		<section id='homeSection' className='container home-container'>
			<div className='home-container-left'>
				<h2>Hi, I am</h2>
				<h1>Krishn Devashish</h1>
				<h4>
					<span>Front-end Developer</span>
					<span>&nbsp;|&nbsp;JS Developer</span>
					<span>&nbsp;|&nbsp;Web Developer</span>
				</h4>
			</div>
			<div className='home-container-right'>
				<div className='profile-container'>
					<img
						className='profile-container-img'
						src={Image.ProfilePic}
						alt='Krishn'
					/>
				</div>
				<div className='profile-skills'>
					<span className='profile-skills-item'>
						<img src={Image.ReactIcon} alt='ReactJS' />
					</span>
					<span className='profile-skills-item'>
						<img src={Image.JsIcon} alt='JS' />
					</span>
					<span className='profile-skills-item'>
						<img src={Image.TsIcon} alt='TS' />
					</span>
					<span className='profile-skills-item'>
						<img src={Image.SassIcon} alt='Sass' />
					</span>
					<span className='profile-skills-item'>
						<img src={Image.AngularIcon} alt='Angular' />
					</span>
				</div>
			</div>
		</section>
	);
};

export default Home;
