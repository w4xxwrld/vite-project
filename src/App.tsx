import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import { Navigate } from 'react-router-dom'
import Members from './pages/Members'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const App: React.FC = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Navigate to="/login" />} />
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
			<Route path="/home" element={<Home />} />
			<Route path="/members" element={<Members />} />
		</Routes>
	</BrowserRouter>
);

export default App;
