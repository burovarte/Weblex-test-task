import "./Main.css";
import Headers from "../headers/Headers";
import Content from "../content/Content";
import Footer from "../Footer/Footer";
import { useState, useEffect } from "react";

function Main() {
	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = (event) => {
			setWidth(event.target.innerWidth);
		};
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const isDesktop = width > 800 ? true : false;

	return (
		<div className="main">
			<div className="background__red-light"></div>
			<div className="background__purple-light"></div>
			<div className="background__red-ball"></div>
			<div className="background__red-ball_lolly"></div>
			<div className="background__purple-ball"></div>
			<Headers isDesktop={isDesktop} />
			<Content isDesktop={isDesktop} />
			<Footer isDesktop={isDesktop} />
		</div>
	);
}

export default Main;
