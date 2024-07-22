// src/App.tsx
import { Button } from "primereact/button";
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
