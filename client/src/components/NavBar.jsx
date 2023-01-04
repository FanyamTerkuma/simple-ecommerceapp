import React from 'react';
import SearchBar from './SearchBar';

function NavBar() {
	return (
		<div className='px-6 w-full sticky top-0 z-50 bg-[#ffffff] shadow-lg opacity-100'>
			<nav className='flex justify-between text-lg py-4 px-2 '>
				<p className='text-black'>logo</p>
				<SearchBar />
			</nav>
		</div>
	);
}

export default NavBar;
