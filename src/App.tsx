// src/App.tsx
import { Button } from "primereact/button";
import { Menubar } from "primereact/menubar";
import React from "react";

const App: React.FC = () => {
	return (
		<div className="App">
			<h1>Hello PrimeReact!</h1>
			<Button label="Click Me" icon="pi pi-check" />
		</div>
	);
};

export default App;
