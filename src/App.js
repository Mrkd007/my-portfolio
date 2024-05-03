import "./styles/main.scss";
import Header from "./componentes/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Footer from "./componentes/Footer/Footer";
import Career from "./pages/Career/Career";
import Skills from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";
import { useEffect, useState } from "react";

function App() {
	const [currentNav, setCurrentNav] = useState("home");

	const handleScroll = () => {
		const windowScrollYPosition = window.scrollY;
		const aboutElmPos = document.getElementById("aboutSection")?.offsetTop;
		const careerElmPos = document.getElementById("careerSection")?.offsetTop;
		const contactElmPos = document.getElementById("contactSection")?.offsetTop;
		const homeElmPos = document.getElementById("homeSection")?.offsetTop;
		const projectElmPos = document.getElementById("projectSection")?.offsetTop;
		if (windowScrollYPosition + 200 >= contactElmPos) {
			setCurrentNav("contact");
		} else if (windowScrollYPosition + 200 >= projectElmPos) {
			setCurrentNav("project");
		} else if (windowScrollYPosition + 200 >= careerElmPos) {
			setCurrentNav("career");
		} else if (windowScrollYPosition + 200 >= aboutElmPos) {
			setCurrentNav("about");
		} else if (windowScrollYPosition + 200 >= homeElmPos) {
			setCurrentNav("home");
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	// console.log(scrollYPosition, currentNav);
	return (
		<>
			<Header currentNav={currentNav} setCurrentNav={setCurrentNav} />
			<div className='app-body'>
				<Home />
				<About />
				<Career />
				<Skills />
				<Projects />
				<Contact />
			</div>
			<Footer currentNav={currentNav} setCurrentNav={setCurrentNav} />
		</>
	);
}

export default App;
