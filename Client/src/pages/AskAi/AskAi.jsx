import './askai.scss';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import axios from "axios";
import Navbar from "../../components/navbar/Navbar";


const Home = ({ setResult }) => {
	const [fullName, setFullName] = useState("");
	const [symptoms, setSymptoms] = useState("");
	const [ageRange, setAgeRange] = useState(1);
	const [gender, setGender] = useState("");
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();



	const handleFormSubmit = (e) => {
		e.preventDefault();

		const formData = new FormData();
		formData.append("fullName", fullName);
		formData.append("symptoms", symptoms);
		formData.append("ageRange", ageRange);
		formData.append("gender", gender);
		axios
			.post("http://localhost:4000/symptoms/askai", formData)
			.then((res) => {
				if (res.data.message) {
					setResult(res.data.data);
					navigate("/symptom");
				}
			})
			.catch((err) => console.error(err));
		setLoading(true);
	};
	if (loading) {
		return <Loading />;
	}
	return (

		<>
		<Navbar/>
		<div className='app'>	
			<h1>Symptoms Checker</h1>
			<p>Check symptoms with Openai in few seconds</p>
			<form
				onSubmit={handleFormSubmit}
				method='POST'
				encType='multipart/form-data'
			>
				<label htmlFor='fullName'>Enter your full name:</label>
				<input
					type='text'
					required
					name='fullName'
					id='fullName'
					value={fullName}
					onChange={(e) => setFullName(e.target.value)}
					placeholder= 'Your name...'
				/>
						<label htmlFor='symptoms'>Symptoms:</label>
						<input
							type='text'
							required
							name='symptoms'
							className='StyleInput'
							value={symptoms}
							onChange={(e) => setSymptoms(e.target.value)}
							placeholder= 'How are you feeling...'
						/>
					<div className="select">
						<div className="ageRange">
						<label htmlFor='ageRange'> Age Range: </label>
						<select id="ageRange" name="ageRange" className='StyleInput'>
						<option value="0">-- Select --</option>
						<option value={ageRange} onSelect={(e) => setAgeRange(e.target.value)}>0 - 28 days</option>
						<option value={ageRange} onSelect={(e) => setAgeRange(e.target.value)}>29 d - 1 years</option>
						<option value={ageRange} onSelect={(e) => setAgeRange(e.target.value)}>1 - 5 years</option>
						<option value={ageRange} onSelect={(e) => setAgeRange(e.target.value)}>6 - 12 years</option>
						<option value={ageRange} onSelect={(e) => setAgeRange(e.target.value)}>13 - 16 years</option>
						<option value={ageRange} onSelect={(e) => setAgeRange(e.target.value)}>17 - 29 years</option>
						<option value={ageRange} onSelect={(e) => setAgeRange(e.target.value)}>30 - 39 years</option>
						<option value={ageRange} onSelect={(e) => setAgeRange(e.target.value)}>40 - 49 years</option>
						<option value={ageRange} onSelect={(e) => setAgeRange(e.target.value)}>50 - 64 years</option>
						<option value={ageRange} onSelect={(e) => setAgeRange(e.target.value)}>65 years</option>
						</select>
					</div>
					<div className="gender">
						<label htmlFor='gender'>Gender: </label>
						<select id="gender" name="gender" className='StyleInput'>
						<option value="0">-- Select --</option>
						<option value={gender} onSelect={(e) => setGender(e.target.value)}>Male</option>
						<option value={gender} onSelect={(e) => setGender(e.target.value)}>Female</option>
						</select>
					</div>
					</div>

				<button>CHECK SYMPTOMS</button>
			</form>
		</div>
		</>
	);
};

export default Home;