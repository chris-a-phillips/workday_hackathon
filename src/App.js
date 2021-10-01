import React from 'react';
import Landing from './frontend/Landing/Landing';
import './App.css';
import Form from './frontend/Form/Form';
import Room from './frontend/client/Room';

function App() {
	return (
		<div className='App'>
			<div className='landing'>
				<Landing />
			</div>
			<div className='user-entry-form'>
				<Form />
				<Room />
			</div>
		</div>
	);
}

export default App;
