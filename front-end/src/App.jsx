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
		fetch('http://localhost:5000/insert', {
			mode: 'cors',
			method: 'POST',
			body: JSON.stringify(inputs),
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
			},
		}).then((data) => {
			console.log(data);
			return data.json();
		});
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
							className="input input-bordered w-full max-w-xs"
						/>
					</div>
					<button className="btn  btn-primary">Go</button>
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
