import React from "react";

function SwirlElement(props) {
	return (
		<>
			<img
				src={props.icon}
				alt=""
				className="position-fixed"
				style={{
					left: props.left,
					top: props.top,
					width: "250px",
					opacity: props.opacity,
					transform: "translate(-50%, -50%)"
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
				{props.inFocus ? `${props.name}` : ""}
			</h1>
		</>
	);
}

export default SwirlElement;
