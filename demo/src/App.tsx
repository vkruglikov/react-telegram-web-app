import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainButtonDemo from './MainButtonDemo';
import BackButtonDemo from './BackButtonDemo';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
			</header>
			<MainButtonDemo />
			<BackButtonDemo />
		</div>
	);
}

export default App;
