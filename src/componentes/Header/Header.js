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

const Header = () => {
	const [size, setSize] = useState([0, 0]);
	const [menuOpen, setMenuOpen] = useState(false);
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
						<li className='nav-item'>
							<AiOutlineHome className='nav-item-icon' />
							<span className='nav-item-title'>Home</span>
							<span className='nav-item-satus'></span>
						</li>
						<li className='nav-item'>
							<AiOutlineUser className='nav-item-icon' />
							<span className='nav-item-title'>About</span>
							<span className='nav-item-satus'></span>
						</li>
						<li className='nav-item'>
							<RiServiceLine className='nav-item-icon' />
							<span className='nav-item-title'>Career</span>
							<span className='nav-item-satus'></span>
						</li>
						<li className='nav-item'>
							<BiBook className='nav-item-icon' />
							<span className='nav-item-title'>Projects</span>
							<span className='nav-item-satus'></span>
						</li>
						<li className='nav-item'>
							<BiMessageSquareDetail className='nav-item-icon' />
							<span className='nav-item-title'>Constant</span>
							<span className='nav-item-satus'></span>
						</li>
					</ul>
				</nav>
				<span className='header__theme-switch'>
					<span className='theme-switch-wrapper'>
						<BiSolidMoon />
						<BiSolidSun />
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
