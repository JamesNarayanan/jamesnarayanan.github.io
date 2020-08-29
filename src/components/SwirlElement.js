import React from "react";

function SwirlElement(props) {
	var iconWidth = 300;
	if (props.screenWidth <= 600) iconWidth = props.screenWidth / 2.5;
	else if (props.screenWidth <= 1200) iconWidth = props.screenWidth / 4;
	iconWidth = iconWidth - iconWidth * (1 - props.opacity) * 0.9;

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
					width: iconWidth + "px",
					opacity: props.opacity,
					display: props.opacity > 0 ? "initial" : "none",
					transform: "translate(-50%, -50%)",
					cursor: "pointer"
				}}
			/>
			{props.inFocus && (
				<div
					className="position-fixed text-center"
					style={{
						top: "50vh",
						left: "50vw",
						width: "90vw",
						transform: "translate(-50%, 0)"
					}}
				>
					<h1
						style={{
							fontSize: "3.5rem",
							color: "black"
						}}
					>
						{props.name}
					</h1>
					<div
						style={{
							fontSize: "2rem"
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
				</div>
			)}
		</>
	);
}

export default SwirlElement;
