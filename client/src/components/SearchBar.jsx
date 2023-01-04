import React from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
function SearchBar() {
	return (
		<div className='flex items-center border-[1.2px] shadow-sm border-black text-black px-2 w-auto'>
			<input
				className='indent-1 bg-transparent py-2 md:w-[24vw] w-[32vw] text-xs md:text-base	 outline-none'
				type='text'
				placeholder='search for a product'
			/>
			<HiOutlineSearch className='cursor-pointer ' size={26} color='#2f3e46' />
		</div>
	);
}

export default SearchBar;
