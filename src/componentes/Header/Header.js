import React, { useLayoutEffect, useState } from "react";
import image from "../../utils/images";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import {
	BiBook,
	BiMessageSquareDetail,
	BiSolidMoon,
	BiSolidSun,
} from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

const Header = ({ currentNav, setCurrentNav }) => {
	const [size, setSize] = useState([0, 0]);
	const [menuOpen, setMenuOpen] = useState(false);
	const [currentTheme, setCurrentTheme] = useState("dark");
	useLayoutEffect(() => {
		const updateSize = () => {
			setSize([window.innerWidth, window.innerHeight]);
		};
		window.addEventListener("resize", updateSize);
		updateSize();
		return () => window.removeEventListener("resize", updateSize);
	}, []);

	const navContainer = () => {
		return (
			<>
				<nav className='header__nav'>
					<ul className='header__nav-menu'>
						<li
							className={"nav-item" + (currentNav === "home" ? " active" : "")}
							onClick={() => {
								setMenuOpen(false);
								setCurrentNav("home");
								document.getElementById("homeSection").scrollIntoView({
									behavior: "smooth",
									block: "start",
									inline: "nearest",
								});
							}}
						>
							<AiOutlineHome className='nav-item-icon' />
							<span className='nav-item-title'>Home</span>
							<span className='nav-item-satus'></span>
						</li>
						<li
							className={"nav-item" + (currentNav === "about" ? " active" : "")}
							onClick={() => {
								setMenuOpen(false);
								setCurrentNav("about");
								document.getElementById("aboutSection").scrollIntoView({
									behavior: "smooth",
									block: "start",
									inline: "nearest",
								});
							}}
						>
							<AiOutlineUser className='nav-item-icon' />
							<span className='nav-item-title'>About</span>
							<span className='nav-item-satus'></span>
						</li>
						<li
							className={
								"nav-item" + (currentNav === "career" ? " active" : "")
							}
							onClick={() => {
								setMenuOpen(false);
								setCurrentNav("career");
								document.getElementById("careerSection").scrollIntoView({
									behavior: "smooth",
									block: "start",
									inline: "nearest",
								});
							}}
						>
							<RiServiceLine className='nav-item-icon' />
							<span className='nav-item-title'>Career</span>
							<span className='nav-item-satus'></span>
						</li>
						<li
							className={
								"nav-item" + (currentNav === "project" ? " active" : "")
							}
							onClick={() => {
								setMenuOpen(false);
								setCurrentNav("project");
								document.getElementById("projectSection").scrollIntoView({
									behavior: "smooth",
									block: "start",
									inline: "nearest",
								});
							}}
						>
							<BiBook className='nav-item-icon' />
							<span className='nav-item-title'>Projects</span>
							<span className='nav-item-satus'></span>
						</li>
						<li
							className={
								"nav-item" + (currentNav === "contact" ? " active" : "")
							}
							onClick={() => {
								setMenuOpen(false);
								setCurrentNav("contact");
								document.getElementById("contactSection").scrollIntoView({
									behavior: "smooth",
									block: "start",
									inline: "nearest",
								});
							}}
						>
							<BiMessageSquareDetail className='nav-item-icon' />
							<span className='nav-item-title'>Contact</span>
							<span className='nav-item-satus'></span>
						</li>
					</ul>
				</nav>
				<span
					className={
						"header__theme-switch" +
						(currentTheme === "dark" ? " disabled" : " enabled")
					}
					onClick={() => {
						if (currentTheme === "dark") {
							document.body.classList.remove("dark");
							document.body.classList.add("light");
							setCurrentTheme("light");
						} else {
							document.body.classList.remove("light");
							document.body.classList.add("dark");
							setCurrentTheme("dark");
						}
					}}
				>
					<span className='theme-switch-wrapper'>
						<BiSolidMoon style={{ transform: "translate(-3px, -2px)" }} />
						<BiSolidSun style={{ transform: "translate(3px, -2px)" }} />
					</span>
				</span>
			</>
		);
	};

	return (
		<header className='header'>
			<span className='header__logo-container'>
				<img src={image.Logo} height='24px' alt='Krishn' />
			</span>
			{size[0] > 720 ? (
				navContainer()
			) : (
				<div className={"header__overlay" + (menuOpen ? " open" : "")}>
					{navContainer()}
				</div>
			)}
			<span
				className={"header__hamburger" + (menuOpen ? " open" : "")}
				onClick={() => {
					setMenuOpen(!menuOpen);
				}}
			>
				<span></span>
				<span></span>
				<span></span>
			</span>
		</header>
	);
};

export default Header;
