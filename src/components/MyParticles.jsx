import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

function MyParticles() {
	const particlesInit = useCallback(async engine => {
		console.log(engine);
		// you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		await loadFull(engine);
	}, []);

	const particlesLoaded = useCallback(async container => {
		await console.log(container);
	}, []);

	return (
		<Particles
			id="tsparticles"
			init={particlesInit}
			loaded={particlesLoaded}
			options={{
				fpsLimit: 120,
				interactivity: {
					detectsOn: "window",
					events: {
						onDiv: {
							enable: true,
							mode: "repulse"
						},
						onClick: {
							enable: false,
							mode: "push"
						},
						onHover: {
							enable: false,
							mode: "bubble"
						},
						resize: true
					},
					modes: {
						bubble: {
							distance: 400,
							duration: 2,
							size: 15
						},
						push: {
							quantity: 4
						},
						repulse: {
							distance: 100,
							duration: 0.4
						}
					}
				},
				particles: {
					color: {
						value: {
							b: { min: 150, max: 250 },
							g: 50,
							r: 50
						}
					},
					move: {
						directions: "none",
						enable: true,
						outModes: {
							default: "bounce"
						},
						random: false,
						speed: 1,
						straight: false
					},
					number: {
						density: {
							enable: true,
							area: 800
						},
						value: 80
					},
					opacity: {
						value: 0.8
					},
					shape: {
						type: "circle"
					},
					size: {
						value: { min: 1, max: 5 }
					}
				},
				fullScreen: {
					enable: true,
					zIndex: -1
				},
				detectRetina: true
			}}
		/>
	);
}

export default MyParticles;
