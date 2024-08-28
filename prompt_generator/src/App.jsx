import { useState } from 'react';

import './App.css';

function App() {
	const [prompt, setPrompt] = useState('Click below to get started!');

	const prompts = [
		'Create a function that reverses a string.',
		'Write a script to fetch data from an API and display it in the console.',
		'Implement a function that filters out even numbers from an array.',
		'Write a function that checks if a given string is a palindrome.',
		'Create a to-do list application using JavaScript.',
		'Develop a countdown timer that counts down from 10 seconds.',
		'Write a function to convert a temperature from Celsius to Fahrenheit.',
		'Create a JavaScript object to store user information.',
		'Implement a basic calculator that can add, subtract, multiply, and divide.',
		'Write a script to toggle the visibility of an HTML element when a button is clicked.',
		'Create a function that returns the largest number in an array.',
		'Develop a simple form validation script that checks for empty fields.',
		'Write a function that returns the factorial of a number.',
		'Create a function that shuffles an array of numbers.',
		'Implement a script to change the background color of a webpage every 5 seconds.',
		'Write a function to generate a random hex color code.',
		'Create a basic quiz application with multiple-choice questions.',
		'Develop a script to display the current date and time in the browser.',
		'Write a function that removes duplicates from an array.',
		'Create a simple digital clock using JavaScript.',
		'Create a function that sorts an array of numbers in ascending order.',
		"Write a script to fetch and display the user's current location using the Geolocation API.",
		'Implement a function that capitalizes the first letter of each word in a string.',
		'Create a function that finds the longest word in a sentence.',
		'Develop a script to dynamically generate a table from an array of objects.',
		'Write a function to calculate the sum of all numbers in an array.',
		'Create a dropdown menu that changes the content of a page when an option is selected.',
		'Implement a function that returns a Fibonacci sequence up to a given number.',
		'Write a script to display an image gallery where images can be clicked to view in a larger size.',
		'Create a function that converts a string to camelCase.',
		'Develop a script to validate an email address format.',
		'Write a function to merge two sorted arrays into one sorted array.',
		"Create a simple weather app that displays weather information based on the user's location.",
		'Implement a script to create a modal popup when a button is clicked.',
		'Write a function to find the common elements between two arrays.',
		'Create a script to generate a random password with specific length and characters.',
		'Develop a script to detect when a user scrolls to the bottom of a webpage.',
		'Write a function that returns the most frequent character in a string.',
		'Create a simple memory game where users match pairs of cards.',
		'Implement a function to debounce user input in a search field.',
	];

	const randomInt = (min, max) => {
		return Math.floor(Math.random() * (max - min + 1) + min);
	};

	const handleClick = () => {
		let i = 0;
		i = randomInt(0, 40);
		console.log(i);
		setPrompt(prompts[i]);
	};
	return (
		<>
			<div className="container">
				<div>
					<h1>Web Developer Prompt Generator</h1>
					<p>
						Use the generator below for quick ideas to keep
						development knowledge fresh.
					</p>
				</div>
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
