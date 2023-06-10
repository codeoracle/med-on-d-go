import React, { useRef } from "react";
import ErrorPage from "./ErrorPage";
import Navbar from "./navbar/Navbar";
import './result.scss'
import { Link } from "react-router-dom";
// import { useReactToPrint } from "react-to-print";

const Resume = ({ result }) => {
	const componentRef = useRef();

	// const handlePrint = useReactToPrint({
	// 	content: () => componentRef.current,
	// 	documentTitle: `${result.fullName} Resume`,
	// 	onAfterPrint: () => alert("Print Successful!"),
	// });

	if (JSON.stringify(result) === "{}") {
		return <ErrorPage />;
	}

	const replaceWithBr = (string) => {
		return string.replace(/\n/g, "<br />");
	};

	return (
		<>
		<Navbar/>
			{/* <button onClick={handlePrint}>Print Page</button> */}
			<main className='container' ref={componentRef}>
				
				<header className='header'>
					
					<div>
						<h1>Hi, {result.fullName}</h1>
						{/* <p className='resumeTitle headerTitle'>
							{result.currentPosition} ({result.currentTechnologies})
						</p>
						<p className='resumeTitle'>
							{result.currentLength}year(s) work experience
						</p> */}
					</div>
					<div className="btns">
						{/* <img
							src={result.image_url}
							alt={result.fullName}
							className='resumeImage'
						/> */}
                <Link to="/appointment" className='link'>
						<button>Book Appointment</button>
						</Link>
                <Link to="/doctors" className='link'>
						<button>Virtual Session</button>
						</Link>
					</div>
				</header>
				<div className='resumeBody'>
					<div>
						<h2 className='resumeBodyTitle'>Symptom Suggestions</h2>
						<p
							dangerouslySetInnerHTML={{
								__html: replaceWithBr(result.objective),
							}}
							className='resumeBodyContent'
						/>
					</div>
					{/* <div>
						<h2 className='resumeBodyTitle'>WORK HISTORY</h2>
						{result.workHistory.map((work) => (
							<p className='resumeBodyContent' key={work.name}>
								<span style={{ fontWeight: "bold" }}>{work.name}</span> -{" "}
								{work.position}
							</p>
						))}
					</div> */}
					<div>
						<h2 className='resumeBodyTitle'> Possible Cause</h2>
						<p
							dangerouslySetInnerHTML={{
								__html: replaceWithBr(result.keypoints),
							}}
							className='resumeBodyContent'
						/>
					</div>
					<div>
						<h2 className='resumeBodyTitle'>What To Do Next</h2>
						<p
							dangerouslySetInnerHTML={{
								__html: replaceWithBr(result.jobResponsibilities),
							}}
							className='resumeBodyContent'
						/>
					</div>
				</div>
			</main>
		</>
	);
};

export default Resume;