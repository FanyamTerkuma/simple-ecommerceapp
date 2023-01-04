import React, { useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { HiPencil } from 'react-icons/hi2';
import Button from '../components/Button';
import { TbCurrencyNaira } from 'react-icons/tb';
import { AiFillPlusCircle } from 'react-icons/ai';
import axios from 'axios';

function AdminPage() {
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
		<div className='bg-[#f8f9fa] '>
			<span className='flex justify-end py-2 px-1'>
				<Button
					className=' hover:bg-transparent rounded border-green-400 text-green-600'
					label={
						<p className='flex items-center justify-center gap-2'>
							<AiFillPlusCircle fill='#40916c' size={30} />
							Add New product
						</p>
					}
				/>
			</span>

			<div className=' container mx-auto flex justify-center'>
				<div className=' grid grid-cols-1 md:grid-cols-4 gap-2 p-2'>
					{products.map((product) => (
						<div
							className='flex  justify-center items-center w-auto bg-white border border-[#273132] '
							key={product.productid}>
							<div className='flex flex-col h-auto w-[20em]'>
								<img
									className='object-contain h-[24em] w-[20em] '
									src={product.image}
									alt={`${product.description}`}
								/>
								<div className='flex flex-col gap-2 w-full p-1'>
									<p className='font-light text-2xl uppercase indent-1'>{product.name}</p>
									<p className='indent-1 text-base sm:text-xl '>{product.description}</p>
									<div className='flex justify-between items-center'>
										<span className=' text-2xl font-light flex items-center justify-start'>
											<TbCurrencyNaira size={30} strokeWidth={0.8} />
											<p>{product.price}</p>
										</span>
										<span className='flex gap-[2px]'>
											<Button
												className='text-green-600 border-green-400 hover:bg-transparent '
												label={<HiPencil size={28} />}
											/>
											<Button
												className=' text-red-700 border-red-500 hover:bg-transparent  '
												label={<FaTrash size={24} />}
											/>
										</span>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default AdminPage;
