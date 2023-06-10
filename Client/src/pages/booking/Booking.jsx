import './booking.scss';
import Navbar from '../../components/navbar/Navbar';

const Booking = () => {
	
	return (
		<>
        <Navbar/>
		<div className='booking'>	
			<h1>Book An Appointment</h1>
			{/* <p>Check symptoms with Openai in few seconds</p> */}
			<form>
				<label htmlFor='fullName'>Enter your full name:</label>
				<input
					type='text'
					required
					name='fullName'
					id='fullName'
					placeholder= 'Your name...'
				/>

						<label htmlFor='currentPosition'>Symptoms:</label>
						<input
							type='text'
							required
							name='currentPosition'
							className='currentInput'
							placeholder= 'How are you feeling...'
						/>

					<div className="select">
						<div className="ageRange">
						<label htmlFor='currentLength'> Age Range: </label>
						<select id="currentLength" name="currentLength" className='currentInput'>
						<option value="0">-- Select --</option>
						<option>0 - 28 days</option>
						<option>29 d - 1 years</option>
						<option>1 - 5 years</option>
						<option>6 - 12 years</option>
						<option>13 - 16 years</option>
						<option>17 - 29 years</option>
						<option>30 - 39 years</option>
						<option>40 - 49 years</option>
						<option>50 - 64 years</option>
						<option>65 years</option>
						</select>

					</div>
					<div className="gender">
						<label htmlFor='currentTechnologies'>Gender: </label>
						<select id="currentTechnologies" name="currentTechnologies" className='currentInput'>
						<option value="0">-- Select --</option>
						<option>Male</option>
						<option>Female</option>
						</select>
					</div>
					</div>
                    <label htmlFor='fullName'>Email:</label>
				<input
					type='text'
					required
					name='fullName'
					id='fullName'
					placeholder= 'Your email...'
				/>

						<label htmlFor='currentPosition'>Address:</label>
						<input
							type='text'
							required
							name='currentPosition'
							className='currentInput'
							placeholder= 'Your address...'
						/>
						<label htmlFor='currentPosition'>Appointment Date:</label>
						<input
							type='date'
							required
							name='currentPosition'
							className='currentInput'
							placeholder= 'Your address...'
						/>

				<button onClick={() => alert("Booking Successful")}>BOOK APPOINTMENT </button>
			</form>
		</div>
		</>
	);
};
	

export default Booking;