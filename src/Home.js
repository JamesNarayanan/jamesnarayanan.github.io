import React, {useState} from "react";
import "./css/Home.css";
import reactLogo from "./img/reactLogo.svg";

function Home() {
	const [scrollY, setScrollY] = useState(0);
	window.addEventListener("scroll", () => {
		setScrollY(window.pageYOffset);
	});

	return (
		<div style={{height: "500vh"}}>
			<div
				className="position-fixed w-100 text-dark text-center"
				style={{backgroundColor: "cyan", height: "100vh"}}
			>
				<img
					src={reactLogo}
					alt="react logo"
					className=""
					style={{
						marginTop: "10%",
						maxWidth: "250px",
						transform: `rotate(${30 + scrollY / 5}deg)`
					}}
				/>
				<h1 className="" style={{marginTop: "10%", fontSize: "5rem"}}>
					React
				</h1>
			</div>
		</div>
	);
}

export default Home;
