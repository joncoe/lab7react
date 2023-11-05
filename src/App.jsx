import useForm from './lib/useForm';
import './App.scss';

function App() {
	const { inputs, handleChange, clearForm, resetForm } = useForm({
		name: '',
		email: '',
	});

	return (
		<>
			<form
				onSubmit={async (e) => {
					e.preventDefault();
					console.log(inputs);
					clearForm();
				}}
			>
				<div className="flex w-72 flex-col gap-6">
					<div className="form-control w-full max-w-xs">
						<label className="label">
							<span className="label-text">What is your name?</span>
						</label>
						<input
							type="text"
							placeholder="Type here"
							name="name"
							value={inputs.name}
							onChange={handleChange}
							className="input input-bordered w-full max-w-xs"
						/>
						<label className="label">
							<span className="label-text">What is your name?</span>
						</label>
						<input
							type="text"
							placeholder="Type here"
							name="email"
							value={inputs.email}
							onChange={handleChange}
							className="input input-bordered w-full max-w-xs"
						/>
					</div>
					<button className="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900">
						Go
					</button>
					<button
						onClick={resetForm}
						className="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900"
					>
						Reset
					</button>
					<p>☀️ high of 12c</p>
				</div>
			</form>
		</>
	);
}

export default App;
