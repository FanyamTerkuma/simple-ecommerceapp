import React from 'react';

function Button({ label, className, ...props }) {
	return (
		<button
			{...props}
			className={`${className} py-1 px-4  border	 border-black  
						text-lg bg-transparent  transition ease-out duration-300  hover:bg-[#43aa8b] hover:shadow-lg`}>
			{label}
		</button>
	);
}

export default Button;
