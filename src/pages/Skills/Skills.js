import { useState } from "react";
import Image from "../../utils/images";

const Skills = () => {
	const [skillPos, setSkillPos] = useState(0);
	const [maxSkillPos, setMaxSkillPos] = useState(2000);
	const diff = 272;

	const updateSkillsView = (type) => {
		const skillListElm = document.getElementById("skillsList");
		const parentWidth = skillListElm.parentElement.scrollWidth;
		let calculateLeftPos = skillPos;
		const maxPos = parseInt(skillListElm.scrollWidth) - parseInt(parentWidth);
		setMaxSkillPos(maxPos);
		if (type === "right") {
			calculateLeftPos = calculateLeftPos + diff;
			calculateLeftPos = calculateLeftPos > maxPos ? maxPos : calculateLeftPos;
		} else {
			calculateLeftPos = calculateLeftPos - diff;
			calculateLeftPos = calculateLeftPos < 16 ? 0 : calculateLeftPos;
		}
		calculateLeftPos = parseInt(calculateLeftPos);
		setSkillPos(calculateLeftPos);
		skillListElm.scrollLeft = calculateLeftPos;
	};

	return (
		<section id='skillSection' className='container skills-container'>
			<div className='container__header'>Skills</div>
			<div className='skills-wrapper'>
				<div
					className={
						"skills-wrapper__btns left-btn" +
						(skillPos === 0 ? " disabled" : "")
					}
					id='leftArrowBtn'
					onClick={() => {
						if (skillPos + 25 > 0) updateSkillsView("left");
					}}
				>
					&lt;
				</div>

				<ul className='skills-wrapper__list' id='skillsList'>
					<li className='skills-wrapper__list-item'>
						<div className='skills-item__header'>
							<img src={Image.HtmlIcon} alt='HTML5' />
						</div>
						<div className='skills-item__body'>
							<ul className='skills-item__body-points'>
								<li className='skills-item__body-points-items'>
									Worked on scemantic HTML
								</li>
								<li className='skills-item__body-points-items'>
									Having more than 5 years of experience in HTML5
								</li>
								<li className='skills-item__body-points-items'>
									Worked on different improvemnt on html to add accessibility,
									improved SEO, and others
								</li>
							</ul>
						</div>
					</li>
					<li className='skills-wrapper__list-item'>
						<div className='skills-item__header'>
							<img src={Image.CssIcon} alt='CSS3' />
						</div>
						<div className='skills-item__body'>
							<ul className='skills-item__body-points'>
								<li className='skills-item__body-points-items'>
									Worked on old codes and updated to latest standards, for
									seamless and standerdisation
								</li>
								<li className='skills-item__body-points-items'>
									Having more than 5 years of experience in CSS3
								</li>
								<li className='skills-item__body-points-items'>
									Worked with css variables, flexbox, grid and others
								</li>
							</ul>
						</div>
					</li>
					<li className='skills-wrapper__list-item'>
						<div className='skills-item__header'>
							<img src={Image.JsIcon} alt='JS' />
						</div>
						<div className='skills-item__body'>
							<ul className='skills-item__body-points'>
								<li className='skills-item__body-points-items'>
									Updated current organisation's project to ES6 features
								</li>
								<li className='skills-item__body-points-items'>
									Gained more than 5 years of experience in JS
								</li>
								<li className='skills-item__body-points-items'>
									Upgraded JS npm packages for the old projects
								</li>
							</ul>
						</div>
					</li>
					<li className='skills-wrapper__list-item'>
						<div className='skills-item__header'>
							<img src={Image.ReactIcon} alt='ReactJS' />
						</div>
						<div className='skills-item__body'>
							<ul className='skills-item__body-points'>
								<li className='skills-item__body-points-items'>
									Build 3 projects for the organisation from scratch
								</li>
								<li className='skills-item__body-points-items'>
									Updated 5+ old jQuery/JS based projrcts to ReactJS
								</li>
								<li className='skills-item__body-points-items'>
									Having more than 3 years of experience
								</li>
							</ul>
						</div>
					</li>
					<li className='skills-wrapper__list-item'>
						<div className='skills-item__header'>
							<img src={Image.WebpackIcon} alt='Webpack' />
						</div>
						<div className='skills-item__body'>
							<ul className='skills-item__body-points'>
								<li className='skills-item__body-points-items'>
									Having more than 3 years of experience in Webpack
								</li>
								<li className='skills-item__body-points-items'>
									Learned and added module-federation in webpack5
								</li>
								<li className='skills-item__body-points-items'>
									Upgraded old webpack3 projects to webpack4 them to webpack5
								</li>
							</ul>
						</div>
					</li>
					<li className='skills-wrapper__list-item'>
						<div className='skills-item__header'>
							<img src={Image.TsIcon} alt='TS' />
						</div>
						<div className='skills-item__body'>
							<ul className='skills-item__body-points'>
								<li className='skills-item__body-points-items'>
									Having &lt;1 year of experience
								</li>
								<li className='skills-item__body-points-items'>
									Working on self learning projects
								</li>
							</ul>
						</div>
					</li>
					<li className='skills-wrapper__list-item'>
						<div className='skills-item__header'>
							<img src={Image.SassIcon} alt='Sass' />
						</div>
						<div className='skills-item__body'>
							<ul className='skills-item__body-points'>
								<li className='skills-item__body-points-items'>
									Upgraded old css stysheets to CSS
								</li>
								<li className='skills-item__body-points-items'>
									Added & Updated mixins and variabes for optimisation
								</li>
								<li className='skills-item__body-points-items'>
									Having more than 5 years of experience
								</li>
							</ul>
						</div>
					</li>
					<li className='skills-wrapper__list-item'>
						<div className='skills-item__header'>
							<img src={Image.AngularIcon} alt='Angular' />
						</div>
						<div className='skills-item__body'>
							<ul className='skills-item__body-points'>
								<li className='skills-item__body-points-items'>
									Worked with old organisation to upgrade old AngualJS project
									to Angular 2 &gt; 4 &gt; 8
								</li>
								<li className='skills-item__body-points-items'>
									Having less than 2 years of experience
								</li>
							</ul>
						</div>
					</li>
				</ul>

				<div
					className={
						"skills-wrapper__btns right-btn" +
						(skillPos + 25 > maxSkillPos ? " disabled" : "")
					}
					id='rightArrowBtn'
					onClick={() => {
						if (skillPos + 25 < maxSkillPos) updateSkillsView("right");
					}}
				>
					&gt;
				</div>
			</div>
		</section>
	);
};

export default Skills;
