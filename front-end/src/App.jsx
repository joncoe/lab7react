import useForm from './lib/useForm';
import './App.scss';

function App() {
	const { inputs, handleChange, clearForm, resetForm } = useForm({
		name: '',
		email: '',
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log('handle submit', inputs);
		console.log(JSON.stringify(inputs));
		await fetch('http://127.0.0.1:8080/insert', {
			mode: 'no-cors',
			method: 'POST',
			body: JSON.stringify(inputs),
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json; charset=UTF-8',
				'Access-Control-Allow-Origin': '*',
			},
		});
		// .then((data) => {
		// 	return data.json();
		// })
		// .then((json) => {
		// 	console.log(json.data);
		// 	clearForm();
		// });
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<div className="flex w-72 flex-col gap-6">
					<div className="form-control w-full max-w-xs">
						<label className="label">
							<span className="label-text">What is your name?</span>
						</label>
						<input
							type="text"
							placeholder="Your Name Please "
							name="name"
							value={inputs.name}
							onChange={handleChange}
							required
							className="input input-bordered w-full max-w-xs"
						/>
						<label className="label">
							<span className="label-text">What is your name?</span>
						</label>
						<input
							type="email"
							placeholder="Email Please"
							name="email"
							value={inputs.email}
							onChange={handleChange}
							required
							className="input input-bordered w-full max-w-xs"
						/>
					</div>
					<button className="btn  btn-primary" type="submit">
						Go
					</button>
					<button onClick={resetForm} className="btn">
						Reset
					</button>
					<p>☀️ high of 12c</p>
				</div>
			</form>
		</>
	);
}

export default App;
