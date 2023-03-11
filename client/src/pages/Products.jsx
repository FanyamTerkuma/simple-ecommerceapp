import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { TbCurrencyNaira } from 'react-icons/tb';
import Button from '../components/Button';

function Products() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchAllProducts = async () => {
			try {
				const res = await axios.get('http://localhost:3001/products');
				setProducts(res.data);
				console.log(res.data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchAllProducts();
	}, []);

	return (
		<div className='bg-[#f8f9fa]  container mx-auto flex justify-center'>
			<div className=' grid grid-cols-1 xl:grid-cols-4 gap-2 p-2'>
				{products.map((product) => (
					<div
						className='flex  justify-center items-center w-auto bg-white border border-[#273132] '
						key={product.productid}>
						<div className='flex flex-col h-auto w-[20em] max-w-full'>
							<img
								className='object-cover h-[24em] w-[20em] '
								src={product.image}
								alt={`${product.name}`}
								loading='lazy'
							/>
							<div className='flex flex-col gap-1 w-full p-1'>
								<p className='font-light text-xl uppercase indent-1'>{product.name}</p>
								<p className='indent-1 h-20'>{product.description}</p>
								<div className='flex justify-between items-center'>
									<span className=' text-2xl font-light flex items-center justify-start'>
										<TbCurrencyNaira size={30} strokeWidth={0.8} />
										<p>{product.price.toLocaleString()}</p>
									</span>
									<Button label='Purchase' />
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Products;
