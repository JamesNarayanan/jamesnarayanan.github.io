import React from "react";

function SwirlElement(props) {
	return (
		<>
			<img
				src={props.icon}
				alt=""
				className="swirlLogo position-fixed"
				onClick={() => props.onLogoClick(props.number)}
				style={{
					left: props.left,
					top: props.top,
					width: "250px",
					opacity: props.opacity,
					display: props.opacity > 0 ? "initial" : "none",
					transform: "translate(-50%, -50%)",
					cursor: "pointer"
				}}
			/>
			{props.inFocus && (
				<>
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
						{props.name}
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
						<div>
							{props.projects.map(project => {
								return (
									<div className="project">
										<a href={project.link}>{project.name}</a>
									</div>
								);
							})}
						</div>
					</div>
				</>
			)}
		</>
	);
}

export default SwirlElement;
