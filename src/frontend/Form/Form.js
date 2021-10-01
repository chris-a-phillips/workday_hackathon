import React, { useState } from 'react';

const Form = () => {
	const [submited, setSubmitted] = useState(false);
	const blankResponse = {
		user: '',
		question_one: '',
		question_two: '',
		question_three: '',
		question_four: '',
		question_five: '',
	};
	const [formSection, setFormSection] = useState(1);
	const [responses, setResponses] = useState(blankResponse);

	const handleChange = (event) => {
		setResponses({
			...responses,
			[event.target.name]: event.target.value,
		});
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(responses);
	};

	const nextSection = (event) => {
		event.preventDefault();
		setFormSection(formSection + 1);
	};

	const prevSection = (event) => {
		event.preventDefault();
		setFormSection(formSection - 1);
	};

	return (
		<div>
			Form Page
			<form onSubmit={handleSubmit}>
				{formSection === 1 ? (
					<div>
						<label htmlFor='user'>Name</label>
						<input
							type='text'
							name='user'
							placeholder='Enter Name'
							// value={}
							onChange={handleChange}
						/>
					</div>
				) : (
					<div />
				)}
				<div>
					<div>
						<h3>Question 1</h3>
						<label htmlFor='question_one'>yes</label>
						<input
							type='radio'
							name='question_one'
							value={'yes'}
							onChange={handleChange}
						/>
						<label htmlFor='question_one'>no</label>
						<input
							type='radio'
							name='question_one'
							value={'no'}
							onChange={handleChange}
						/>
					</div>
				</div>
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};

export default Form;
