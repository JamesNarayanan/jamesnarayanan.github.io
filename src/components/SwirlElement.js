import React from "react";

function SwirlElement(props) {
	return (
		<>
			<img
				src={props.icon}
				alt=""
				className="swirlLogo position-fixed"
				style={{
					left: props.left,
					top: props.top,
					width: "250px",
					opacity: props.opacity,
					visibility: props.opacity > 0 ? "visible" : "hidden",
					transform: "translate(-50%, -50%)"
				}}
			/>
			<h1
				className="position-fixed"
				style={{
					left: "50vw",
					top: "50vh",
					fontSize: "4rem",
					transform: "translate(-50%, -50%)",
					color: "black"
				}}
			>
				{props.inFocus ? `${props.name}` : ""}
			</h1>
			<div
				className="position-fixed text-center"
				style={{
					left: "50vw",
					top: "55vh",
					fontSize: "2rem",
					transform: "translate(-50%, 0)"
				}}
			>
				<u>Projects</u>
				<br />
				{props.inFocus
					? props.projects.map(project => {
							return (
								<div className="project">
									<a href={project.link}>{project.name}</a>
								</div>
							);
					  })
					: ""}
			</div>
		</>
	);
}

export default SwirlElement;
