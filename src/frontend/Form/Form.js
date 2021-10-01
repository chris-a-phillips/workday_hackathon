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
	const [formSection, setFormSection] = useState(0);
	const [responses, setResponses] = useState(blankResponse);

	const handleChange = (event) => {
		setResponses({
			...responses,
			[event.target.name]: event.target.value,
		});
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		setSubmitted(true);
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
				{formSection === 0 ? (
					<div>
						<label htmlFor='user'>Name</label>
						<input
							type='text'
							name='user'
							placeholder='Enter Name'
							onChange={handleChange}
						/>
					</div>
				) : null}
				{formSection === 1 ? (
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
				) : null}
				{formSection === 2 ? (
					<div>
						<div>
							<h3>Question 2</h3>
							<label htmlFor='question_two'>yes</label>
							<input
								type='radio'
								name='question_two'
								value={'yes'}
								onChange={handleChange}
							/>
							<label htmlFor='question_two'>no</label>
							<input
								type='radio'
								name='question_two'
								value={'no'}
								onChange={handleChange}
							/>
						</div>
					</div>
				) : null}
				{formSection === 3 ? (
					<div>
						<div>
							<h3>Question 3</h3>
							<label htmlFor='question_three'>yes</label>
							<input
								type='radio'
								name='question_three'
								value={'yes'}
								onChange={handleChange}
							/>
							<label htmlFor='question_three'>no</label>
							<input
								type='radio'
								name='question_three'
								value={'no'}
								onChange={handleChange}
							/>
						</div>
					</div>
				) : null}
				{formSection === 4 ? (
					<div>
						<div>
							<h3>Question 4</h3>
							<label htmlFor='question_four'>yes</label>
							<input
								type='radio'
								name='question_four'
								value={'yes'}
								onChange={handleChange}
							/>
							<label htmlFor='question_four'>no</label>
							<input
								type='radio'
								name='question_four'
								value={'no'}
								onChange={handleChange}
							/>
						</div>
					</div>
				) : null}
				{formSection === 5 ? (
					<div>
						<div>
							<h3>Question 5</h3>
							<label htmlFor='question_five'>yes</label>
							<input
								type='radio'
								name='question_five'
								value={'yes'}
								onChange={handleChange}
							/>
							<label htmlFor='question_five'>no</label>
							<input
								type='radio'
								name='question_five'
								value={'no'}
								onChange={handleChange}
							/>
						</div>
					</div>
				) : null}
				{formSection <= 4 ? (
					<div>
						{formSection > 0 ? (
							<button onClick={prevSection}>Previous</button>
						) : null}
						<button onClick={nextSection}>Next</button>
					</div>
				) : (
					<div>
						<button type='submit'>Submit</button>
					</div>
				)}
			</form>
		</div>
	);
};

export default Form;
