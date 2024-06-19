import { useState } from 'react'
import Register from './Register'
import Login from './Login'
import Home from './Home'
import { Navigate } from 'react-router-dom'
import Receivers from './Receivers'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
const App: React.FC = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Navigate to="/login" />} />
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
			<Route path="/home" element={<Home />} />
			<Route path="/receivers" element={<Receivers />} />
		</Routes>
	</BrowserRouter>
);

export default App;
