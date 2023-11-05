import { useState } from 'react';
import './App.css';

function App() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');

	return (
		<>
			<h1>Name and Email</h1>
			<div className="card">
				<p>ジョナサン</p>
			</div>
			<p>Sunny, high of 12c</p>
		</>
	);
}

export default App;
