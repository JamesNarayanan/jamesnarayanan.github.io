import React from "react";
import "./css/Home.css";
import {Row, Col} from "react-bootstrap";

function Home() {
	return (
		<>
			<div className="w-100 p-3 text-center">
				<h1 className="title">James Narayanan</h1>
				<h2 className="subtitle">Home Site</h2>
			</div>
			<div className="text-center">
				<h2 className="subtitle">
					<a href="https://github.com/JamesNarayanan">Github</a>
				</h2>
				<Row className="w-75 mx-auto" style={{fontSize: "1.5rem"}}>
					<Col>
						<a href="https://roboguide.tk">RoboGuide</a>
					</Col>
					<Col>
						<a href="https://github.com/Team41Robotics/2020-Robot-Code">
							2020 FRC Robot Code
						</a>
					</Col>
					<Col>
						<a href="https://jamesnarayanan.github.io/weather">Weather</a>
					</Col>
				</Row>
			</div>
		</>
	);
}

export default Home;
