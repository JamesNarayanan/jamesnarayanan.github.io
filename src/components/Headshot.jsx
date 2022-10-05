import headshot from "../assets/headshot.jpg";

function Headshot() {
	console.log(headshot);

	return (
		<div className="headshot">
			<img src={headshot} alt="headshot" />
		</div>
	);
}

export default Headshot;
