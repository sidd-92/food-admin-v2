// src/main.tsx
import "primeflex/primeflex.css"; // flex utility
import "primeicons/primeicons.css"; // icons
import "primereact/resources/primereact.min.css"; // core css
import "primereact/resources/themes/saga-blue/theme.css"; // theme
import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
]);

const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
