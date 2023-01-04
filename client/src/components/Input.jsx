import React from 'react';

function Input({ label, id, type, placeholder, ...props }) {
	return (
		<div className='flex flex-col gap-1'>
			<label htmlFor={`${id}`}>{label} </label>
			<input
				className='w-auto p-2 rounded shadow-inner border border-slate-100 focus:outline-none'
				id={id}
				type={type}
				placeholder={placeholder}
				{...props}
			/>
		</div>
	);
}

export default Input;
