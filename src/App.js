import React from "react";
import env from "react-dotenv";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Home from "./component/Home";
import Create from "./component/Create";
import Edit from "./component/Edit";
import { useEffect } from "react";
import axios from "axios";

function App() {
	let getData = async () => {
		let res = await axios.get(env.API_URL);
		console.log(res.data);
	};

	useEffect(() => {
		getData();
	});

	return (
		<>
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/create" element={<Create />} />
					<Route path="/edit/:id" element={<Edit />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
