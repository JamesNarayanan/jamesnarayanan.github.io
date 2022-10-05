import { FilePersonFill, Linkedin } from "react-bootstrap-icons";
import ResumePDF from "../assets/Resume.pdf";

function Documents() {
	const showResume = () => {
		document.getElementsByClassName("resume")[0].style.display = "block";
	};
	return (
		<div className="documents">
			<a href={ResumePDF} download="JamesNarayananResume.pdf">
				<FilePersonFill className="resume-icon" onClick={showResume} />
			</a>
			<a href="https://www.linkedin.com/in/jnar/" target="_blank" rel="noreferrer">
				<Linkedin className="linkedin-icon" />
			</a>
		</div>
	);
}

export default Documents;
