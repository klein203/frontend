import React from 'react';
//import logo from './logo.svg';
import './App.css';
import DataTable from './demo/DataTable';
import ClockBlock from './demo/Clock';
import Popper from './demo/Popper';
import FocusInput from './demo/FocusInput';


function App() {
	const clockConfig = [
		{
			id: 1,
			name: "Alpha",
			desc: "Alpha Clock"
		}, {
			id: 2,
			name: "Beta",
			desc: "Beta Clock"
		}, {
			id: 3,
			name: "Gamma",
			desc: "Gamma Clock"
		}, {
			id: 4,
			name: "Theta",
			desc: "Theta Clock"
		}
	];
	var step = 1;

	return (
		<div>
			<ClockBlock config={clockConfig} />
			<FocusInput />
			<Popper step={step} />
			<DataTable />
		</div>
	);
}

export default App;
