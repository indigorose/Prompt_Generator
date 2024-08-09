import { useState } from 'react';

import './App.css';

function App() {
	const [prompt, setPrompt] = useState('Click Here for a Prompt');

	const quotes = ['Hello', 'one', ' three', ' two', 'four', 'five'];

	const randomInt = (min, max) => {
		return Math.floor(Math.random() * (max - min + 1) + min);
	};

	const handleClick = () => {
		let i = 0;
		i = randomInt(0, 5);
		console.log(i);
		setPrompt(quotes[i]);
	};
	return (
		<>
			<div className="container">
				<h1>{prompt}</h1>
				<button
					type="submit"
					onClick={handleClick}
					onChange={(e) => setPrompt(e.target.value)}
				>
					Change Prompt
				</button>
			</div>
		</>
	);
}

export default App;
