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
			color: "#ff3030",
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
			color: "yellow",
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

	/** Radii of swirl element motion. x is in vw, y is in px */
	const radii = {x: 30, y: 250};
	for (let i = 0; i < swirlElementInfo.length; i++) {
		let angle = scrollY * (180 / pixPerRotate) + 90 - 90 * i;
		let relativeAngle = angle % 360;
		let left = `calc(50vw - ${radii.x}vw * ${Math.cos(degToRad(angle))})`;
		let top = `calc(50vh - ${radii.y * Math.sin(degToRad(angle))}px)`;
		/** How far in degrees past the horizontal the icons show up before fading away */
		let fadeExtension = 45;
		let opacity = `${
			angle >= -fadeExtension && angle <= 180 + fadeExtension
				? 1 - Math.abs(90 - relativeAngle) / (90 + fadeExtension)
				: 0
		}`;
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
			/>
		);
	}

	// Makes background overflow color match background color of the rest of the screen
	document.documentElement.style.backgroundColor =
		swirlElementInfo[currentSwirlEl].color;

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
						transition: "0.5s",
						backgroundColor: swirlElementInfo[currentSwirlEl].color,
						height: "100vh"
					}}
				>
					{swirlElements}
				</div>
				<div
					className="position-fixed text-dark"
					style={{top: "5px", left: "10px", fontFamily: "Bungee Shade"}}
				>
					<h1>
						<a href="https://github.com/JamesNarayanan">James Narayanan</a>
					</h1>
				</div>
			</div>
		</>
	);
}

export default Swirl;
