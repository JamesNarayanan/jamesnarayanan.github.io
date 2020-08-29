import React, {useState} from "react";
import "./css/Swirl.css";
import SwirlElement from "./components/SwirlElement";

import reactLogo from "./img/reactLogo.svg";
import pythonLogo from "./img/pythonLogo.svg";
import javaLogo from "./img/javaLogo.svg";
import cppLogo from "./img/cppLogo.svg";
import {Helmet} from "react-helmet";

function Swirl() {
	const [scrollY, setScrollY] = useState(0);
	window.addEventListener("scroll", () => {
		setScrollY(window.pageYOffset);
	});
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);
	const [screenHeight, setScreenHeight] = useState(window.innerHeight);
	window.addEventListener("resize", () => {
		setScreenWidth(window.innerWidth);
		setScreenHeight(window.innerHeight);
	});

	/** Converts inputted angle from degrees to radians */
	const degToRad = angle => angle * (Math.PI / 180);

	/** The number pixels of scroll that correspond to one half rotation */
	const pixPerRotate = 2000;

	const swirlElementInfo = [
		{
			name: "React",
			color: "cyan",
			icon: reactLogo,
			projects: [
				{name: "RoboGuide", link: "https://roboguide.tk"},
				{name: "Weather", link: "https://jamesnarayanan.github.io/weather"}
			]
		},
		{
			name: "Java",
			color: "#ff4444",
			icon: javaLogo,
			projects: [
				{
					name: "2020 FIRST Robotics Code",
					link: "https://github.com/Team41Robotics/2020-Robot-Code"
				},
				{name: "JavaFX Games", link: "https://github.com/JamesNarayanan/JavaFX"}
			]
		},
		{
			name: "Python",
			color: "#fe0",
			icon: pythonLogo,
			projects: [
				{
					name: "Tape Detector",
					link: "https://github.com/Team41Robotics/tape_detector/"
				}
			]
		},
		{
			name: "C++",
			color: "#6196cb",
			icon: cppLogo,
			projects: [
				{
					name: "2019 FIRST Robotics Code",
					link: "https://github.com/Team41Robotics/2019-Robot-Code"
				}
			]
		}
	];
	var currentSwirlEl = 0;
	var swirlElements = [];

	/** Radii of swirl element motion. x is in vw, y is in vh.
	 * <p>
	 * x radius shrinks as the screen widens.
	 * y radius grows as the screen widens.
	 */
	var radii = {
		x: 35 - screenWidth / 400,
		y: 12 + screenHeight / 100
	};
	if (radii.y > 25) radii.y = 25;

	const onLogoClick = i => {
		window.scrollTo({top: (pixPerRotate / 2) * i, behavior: "smooth"});
	};
	for (let i = 0; i < swirlElementInfo.length; i++) {
		let angle = scrollY * (180 / pixPerRotate) + 90 - 90 * i;
		let relativeAngle = angle % 360;
		let left = `calc(50vw - ${radii.x}vw * ${Math.cos(degToRad(angle))})`;
		let top = `calc(50vh - ${radii.y}vh * ${Math.sin(degToRad(angle))})`;
		/** How far in degrees past the horizontal the icons will continue to fade before disapeearing entirely */
		let fadeExtension = 45;
		let opacity = `${
			angle >= -fadeExtension && angle <= 180 + fadeExtension
				? 1 - Math.abs(90 - relativeAngle) / (90 + fadeExtension)
				: 0
		}`;
		/** An icon is in focus if it's in the 90° closest to the top of the screen */
		let inFocus = relativeAngle >= 45 && relativeAngle < 135;

		currentSwirlEl = inFocus ? i : currentSwirlEl;

		swirlElements.push(
			<SwirlElement
				name={swirlElementInfo[i].name}
				icon={swirlElementInfo[i].icon}
				left={left}
				top={top}
				opacity={opacity}
				inFocus={inFocus}
				projects={swirlElementInfo[i].projects}
				number={i}
				screenWidth={screenWidth}
				onLogoClick={onLogoClick}
			/>
		);
	}

	// Makes background overflow color match background color of the rest of the screen
	document.documentElement.style.backgroundColor =
		swirlElementInfo[currentSwirlEl].color;
	// This should be the same length of time as the background transition
	document.documentElement.style.transition = "0.5s";

	return (
		<>
			<Helmet>
				<title>James Narayanan</title>
			</Helmet>
			<div
				id="longSwirl"
				style={{
					height: `calc(${
						(pixPerRotate / 2) * (swirlElements.length - 1)
					}px + 100vh)`
				}}
			>
				<div
					className="position-fixed w-100 text-dark"
					style={{
						transition: `0.5s`,
						backgroundColor: swirlElementInfo[currentSwirlEl].color,
						height: "100vh"
					}}
				>
					{swirlElements}
				</div>
				<div
					className="position-fixed w-100 text-dark text-center"
					style={{
						top: "5px",
						fontFamily: "Bungee Shade"
					}}
				>
					<h1>
						<a href="https://github.com/JamesNarayanan">James Narayanan</a>
					</h1>
				</div>
				<div
					className="position-fixed w-100 text-dark text-center"
					style={{
						bottom: "5px",
						transition: "0.25s",
						opacity: scrollY < 500 ? 1 : 0
					}}
				>
					<h3>Scroll down for more!</h3>
				</div>
			</div>
		</>
	);
}

export default Swirl;
