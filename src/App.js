import * as React from "react";

import { Routes, Route, Navigate } from "react-router-dom";



import Home from "./components/Home";
import Signin from "./components/Signin";
import Signup from "./components/Signup";

import axios from 'axios'

import { useState,useEffect } from "react";

function App() {
	console.log(process.env)
  const [user, setUser] = useState(null);
  console.log(user)
  const getUser = async () => {
		try {
			const url = `${process.env.REACT_APP_URL}/auth/login/success`;
			const { data } = await axios.get(url, { withCredentials: true });
			setUser(data.user);
      console.log(user)
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {

    
		getUser();
	}, []);


  

 
  return (
    <div className="App">
       <Routes>
				<Route
					exact
					path="/"
					element={user ? <Home user={user} /> : <Navigate to="/signup" />}
				/>
				<Route
					exact
					path="/signin"
					element={user ? <Navigate to="/" /> : <Signin setUser={setUser}/>}
				/>
				<Route
					path="/signup"
					element={user ? <Navigate to="/" /> : <Signup />}
				/>
				
			</Routes>
		</div>
  
  );
}

export default App;
