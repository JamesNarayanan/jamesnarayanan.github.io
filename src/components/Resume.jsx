import { Document, Page } from "react-pdf";
// import ResumePDF from "../assets/Resume.pdf";

function Resume() {
	// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
	return (
		<Document file={"../assets/Resume.pdf"} className="resume" onLoadError={error => console.log(error)}>
			<Page pageNumber={1} />
		</Document>
	);
}

export default Resume;
