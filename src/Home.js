import React, {useState} from "react";
import "./css/Home.css";
import reactLogo from "./img/reactLogo.svg";

function Home() {
	const [scrollY, setScrollY] = useState(0);
	window.addEventListener("scroll", () => {
		setScrollY(window.pageYOffset);
	});

	const degToRad = angle => angle * (Math.PI / 180);
	// The last number in the calculation below is the number pixels
	// of scroll that correspond to one full rotation
	const pixPerRotate = 1000;
	var angle = scrollY * (360 / pixPerRotate);
	// x radius is in vw, y is in px
	var radius = {x: 30, y: 250};
	var left = `calc(50vw - ${radius.x}vw * ${Math.cos(degToRad(angle))})`;
	var top = `calc(50vh - ${radius.y * Math.sin(degToRad(angle))}px)`;
	// Most visible at top rotation, invisible while in bottom half
	var opacity = `${
		angle % 360 <= 180 ? 1 - Math.abs(90 - (angle % 360)) / 90 : 0
	}`;

	return (
		<div
			style={{
				height: `calc(${pixPerRotate * 5}px + 100vh)`
			}}
		>
			<div
				className="position-fixed w-100 text-dark"
				style={{
					backgroundColor: "cyan",
					height: "100vh"
				}}
			>
				<img
					src={reactLogo}
					alt="react logo"
					className="position-fixed"
					style={{
						left: left,
						top: top,
						width: "250px",
						opacity: opacity,
						transform: "/* rotate(30deg) */ translate(-50%, -50%)"
					}}
				/>
				<h1
					className="position-fixed"
					style={{
						left: "50vw",
						top: "50vh",
						fontSize: "4rem",
						transform: "translate(-50%, -50%)"
					}}
				>
					React | {scrollY} | {Math.round(angle)}°
				</h1>
			</div>
		</div>
	);
}

export default Home;
