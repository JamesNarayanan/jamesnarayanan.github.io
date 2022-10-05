import About from "./components/About";
import Documents from "./components/Documents";
import Headshot from "./components/Headshot";
import MyParticles from "./components/MyParticles";
import Name from "./components/Name";
import "./css/App.css";

function App() {
	return (
		<>
			<MyParticles />
			<div className="container">
				<div className="row mx-0 align-items-center">
					<div className="col-12 col-lg-4 mb-3 mb-lg-0 px-4">
						<Headshot />
					</div>
					<div className="content col-12 col-lg-8">
						<Name />
						<About />
						<Documents />
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
