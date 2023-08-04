import React, { useRef } from "react";
import ErrorPage from "../../components/ErrorPage/ErrorPage";
import Navbar from "../../components/navbar/Navbar";
import './result.scss'
import { Link } from "react-router-dom";


const Resume = ({ result }) => {
	const componentRef = useRef();


	if (JSON.stringify(result) === "{}") {
		return <ErrorPage />;
	}

	const replaceWithBr = (string) => {
		return string.replace(/\n/g, "<br />");
	};

	return (
		<>
		<Navbar/>
			<main className='container' ref={componentRef}>
				
				<header className='header'>
					
					<div>
						<h1>Hi, {result.fullName}</h1>
					</div>
					<div className="btns">
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