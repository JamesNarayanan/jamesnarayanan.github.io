import { TypeAnimation } from "react-type-animation";

function Name() {
	return (
		<TypeAnimation
			sequence={[
				"James Nrayan", // Types "James Nrayan"
				200, // Waits 200ms
				"James ", // Deletes "Nrayan"
				500, // Waits 500ms
				"James Narayanan" // Types "Narayanan"
			]}
			wrapper="h1"
			className="name"
			cursor={true}
			speed={1}
		/>
	);
}

export default Name;
