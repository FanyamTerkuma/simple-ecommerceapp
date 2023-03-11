import React, { useEffect, useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { HiPencil } from 'react-icons/hi2';
import Button from '../components/Button';
import { TbCurrencyNaira } from 'react-icons/tb';
import { AiFillPlusCircle } from 'react-icons/ai';
import axios from 'axios';
import { Link } from 'react-router-dom';

function AdminPage() {
	const [products, setProducts] = useState([]);
	const [deleteModal, setDeleteModal] = useState(false);
	const [deleteProduct, setDeleteProduct] = useState(null);
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
	const confirmDelete = (id) => {
		setDeleteProduct(id);
		setDeleteModal(!deleteModal);
	};
	const handleDelete = async (id) => {
		try {
			await axios.delete('http://localhost:3001/products/' + id);
			window.location.reload();
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div className='bg-[#f8f9fa] relative px-4'>
			{deleteModal && (
				<div className='bg-[#ffffff] w-[20em] p-2 h-36 flex flex-col justify-center items-center gap-8 rounded-xl shadow-lg sticky z-20  left-0 right-0 mx-auto top-20 '>
					<h1 className='font-semibold text-sm text-red-500'>Are you sure you want to delete product?</h1>
					<div className='flex gap-2'>
						<Button
							className='hover:bg-red-600'
							label='Proceed'
							onClick={() => handleDelete(deleteProduct)}
						/>
						<Button label='Cancel' onClick={() => setDeleteModal(!deleteModal)} />
					</div>
				</div>
			)}
			<span className='flex justify-end py-2  '>
				<Link to='/add'>
					<Button
						className=' hover:bg-transparent rounded border-green-400 text-green-600'
						label={
							<p className='flex items-center justify-center gap-2'>
								<AiFillPlusCircle fill='#40916c' size={30} />
								Add New product
							</p>
						}
					/>
				</Link>
			</span>
			<div className=' container mx-auto flex justify-center'>
				<div className=' grid grid-cols-1  xl:grid-cols-4 gap-2 p-2'>
					{products.map((product) => (
						<div
							className='flex  justify-center items-center w-auto bg-white border border-[#273132] '
							key={product.productid}>
							<div className='flex flex-col  h-auto w-[20em] '>
								<img
									className='object-cover h-[24em] w-[20em] '
									src={product.image}
									alt={`${product.name}`}
								/>
								<div className='flex flex-col gap-1  w-full p-1'>
									<p className='font-light text-xl uppercase indent-1'>{product.name}</p>
									<p className='indent-1 h-20  overflow-auto'>{product.description}</p>
									<div className='flex justify-between items-center'>
										<span className=' text-2xl font-light flex items-center justify-start'>
											<TbCurrencyNaira size={30} strokeWidth={0.8} />
											<p>{product.price.toLocaleString()}</p>
										</span>
										<span className='flex gap-[2px]'>
											<Link to={`/update/${product.productid}`}>
												<Button
													className='text-green-600 border-green-400 hover:bg-transparent h-full'
													label={<HiPencil size={22} />}
												/>
											</Link>

											<Button
												className=' text-red-700 border-red-500 hover:bg-transparent '
												label={<FaTrash size={22} />}
												onClick={() => confirmDelete(product.productid)}
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
