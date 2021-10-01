import React, { useState } from 'react';

const Form = () => {
    const [submited, setSubmitted] = useState(false);
    const blankResponse = {
        user: '',
        question_one: '',
        question_two: '',
        question_three: '',
        question_four: '',
        question_five: ''
    }
    const [formSection, setFormSection] = useState(1);
    const [responses, setResponses] = useState(blankResponse)

    const handleChange = (event) => {
        setResponses({
			...responses,
			[event.target.name]: event.target.value,
		});
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        
    }

    const nextSection = (event) => {
        event.preventDefault()
        setFormSection(formSection + 1)
    }

    const prevSection = (event) => {
        event.preventDefault()
        setFormSection(formSection - 1)
    }

    return (
        <div>
            Form Page
            <form onSubmit={handleSubmit}>

            </form>
        </div>
    );
};

export default Form;