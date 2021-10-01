import React, { useState } from 'react';
import questions from '../../backend/questions.js';
import './Form.css'

const Form = () => {
	const [submitted, setSubmitted] = useState(false);
	const blankResponse = {
		user: '',
	};
	const [formSection, setFormSection] = useState(0);
	const [responses, setResponses] = useState(blankResponse);
	const [totalPlayers, setTotalPlayers] = useState(0);

	const answerGiven = (event) => {
		handleChange(event)
		nextSection(event)
	}

	const handleChange = (event) => {
		const questionKey = `question_${formSection}`
		const currResponses = responses
		currResponses[questionKey] = event.target.value
		setResponses(currResponses);
	};

	const handleTotalPlayers = (event) => {
		setTotalPlayers(event.target.value)
	}

	// const handleNameChange = (event) => {
	// 	setResponses({
	// 		...responses,
	// 		'user': event.target.value
	// 	})
	// }

	const handleSubmit = (event) => {
		event.preventDefault();
		setSubmitted(true);
		console.log(responses);
	};

	const nextSection = (event) => {
		event.preventDefault();
		setFormSection(formSection + 1);
	};

	const zombie = questions[1];
	return (
		<div>
			<form className="form" onSubmit={handleSubmit}>
				{formSection === 0 ? (
					<div className="name-input">
						<input
							type='text'
							name='user'
							placeholder='How many players?'
							onChange={handleTotalPlayers}
							className="input-field"
						/>
						<button className="btn" onClick={nextSection}>Next</button>
					</div>
				) : null}

				{/* Questions to ask */}
				{formSection <= zombie.questions.length && formSection > 0 ? (
					<div className="question">
						<h3>{zombie.questions[formSection - 1].question}</h3>
						<div className="question-btns">
							<button className="btn" onClick={nextSection}>Next</button>
						</div>
						<p>Total Players: {totalPlayers}; Type in the chatroom anonymously!</p>
					</div>
				) : null}

				{/* Questions are done */}
				{formSection > zombie.questions.length ? (
					<div>
						<p>Thanks for playing!</p>
					</div>
				) : null}
			</form>
		</div>
	);
};

export default Form;
