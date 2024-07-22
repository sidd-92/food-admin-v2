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
import Recipies from "./Recipies";
import { Menubar } from "primereact/menubar";
import { MenuItem } from "primereact/menuitem";

const items: MenuItem[] = [
	{
		label: "Home",
		icon: "pi pi-home",
		url: "/",
	},
	{
		label: "Recipies",
		icon: "pi pi-star",
		url: "/recipies",
	},
];
const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/recipies",
		element: <Recipies />,
	},
]);

const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(
	<React.StrictMode>
		<Menubar model={items} />

		<RouterProvider router={router} />
	</React.StrictMode>
);
