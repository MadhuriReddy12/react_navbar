// filename -App.js

import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Form from "./components/form"
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";

import AnnualReport from "./pages/annual";

import Blogs from "./pages/blogs";




function App() {
	return (
		<Router>
			<Navbar />
      <Form /> {/* Include the Form component */}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				
				<Route
					path="/annual"
					element={<AnnualReport />}
				/>
				
				<Route path="/blogs" element={<Blogs />} />
				
			</Routes>
		</Router>
	);
}

export default App;
