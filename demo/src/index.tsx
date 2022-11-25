import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import logo from './logo.svg';

import MainButtonDemo from './MainButtonDemo';
import BackButtonDemo from './BackButtonDemo';
import ShowPopupDemo from './ShowPopupDemo';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement,
);

root.render(
	<div>
		<header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
		</header>
		<MainButtonDemo />
		<BackButtonDemo />
		<ShowPopupDemo />
	</div>,
);
