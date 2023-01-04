import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Products from './pages/Products';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddProducts from './pages/AddProducts';
import AdminPage from './pages/AdminPage';

function App() {
	return (
		<div>
			<NavBar />
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Products />} />
					<Route path='/add' element={<AddProducts />} />
					<Route path='/admin' element={<AdminPage />} />
				</Routes>
			</BrowserRouter>
			<Footer />
		</div>
	);
}

export default App;
